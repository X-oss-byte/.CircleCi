# ts-doc-internal

Requires any TSDoc comments on internal objects to include either an `@internal` or an `@hidden` tag.

Internal objects are defined as classes, interfaces, or standalone functions that are not exported from the main entrypoint to the package and are not members of any exports from the main entrypoint (defined recursively). **Files that are specified as excluded in a `typedoc.json` file are ignored by this rule.**

## Background

We used to use either `@hidden` or `@ignore` to hide definitions from showing up in our docs but none of them is supported by TSDoc. However, we opted to allow `@hidden` with TSDoc ESLint plugin and replaced all uses of `@ignore` with `@hidden` so we can stick with just one of them.

## When to use either tags

TSDoc supports `@internal` and it is confusing to decide whether to use that or `@hidden`. `@internal`, unlike `@hidden`, has compilation implications. In particular, using the former can instruct the compiler to not emit declarations for the annotated definitions (see [here](https://www.typescriptlang.org/zh/tsconfig#stripInternal)). So it is advised to use `@internal` if you want this specific behavior along with the compiler flag. However, unfortunately, you still need to also insert `@hidden` because our docs generator tool (TypeDoc) does not understand the stripInternal flag. This is why you can find many definitions in our code base annotated with both. If the definition is supposed to be exported but you do not want to have it in the docs, then use `@hidden` only.

## Configuration

By default, the main entrypoint is assumed to be `src/index.ts`. However, if your package's main entrypoint is elsewhere, you'll need to specify so in your `.eslintrc` configuration file as follows (for example, if the entrypoint is `index.ts`):

```json
{
  "settings": {
    "main": "index.ts"
  }
}
```

This rule exists to prevent inclusion of internal objects in documentation generated by tools such as [API Extractor](https://api-extractor.com/) and [TypeDoc](https://typedoc.org/).

## Examples

Assume all objects mentioned are not exported from the main entrypoint to the package.

### Good

```ts
/**
 * Other documentation
 * @internal
 */
class ExampleClass {}
```

```ts
/**
 * Other documentation
 * @hidden
 */
interface ExampleInterface {}
```

```ts
/**
 * Other documentation
 * @internal
 */
function exampleFunction(): void {}
```

### Bad

```ts
/**
 * Other documentation
 */
class ExampleClass {}
```

```ts
/**
 * Other documentation
 */
interface ExampleInterface {}
```

```ts
/**
 * Other documentation
 * @ignore
 */
function exampleFunction(): void {}
```

## When to turn off

If you are not using TypeDoc.

## Source

Suggestion by [@chradek](https://github.com/chradek).

## API Report File for "@azure/arm-servicelinker"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

// @public
export type ActionType = string;

// @public
export interface AuthInfoBase {
    authType: "secret" | "userAssignedIdentity" | "systemAssignedIdentity" | "servicePrincipalSecret" | "servicePrincipalCertificate";
}

// @public (undocumented)
export type AuthInfoBaseUnion = AuthInfoBase | SecretAuthInfo | UserAssignedIdentityAuthInfo | SystemAssignedIdentityAuthInfo | ServicePrincipalSecretAuthInfo | ServicePrincipalCertificateAuthInfo;

// @public
export type AuthType = string;

// @public
export interface AzureKeyVaultProperties extends AzureResourcePropertiesBase {
    connectAsKubernetesCsiDriver?: boolean;
    type: "KeyVault";
}

// @public
export interface AzureResource extends TargetServiceBase {
    id?: string;
    resourceProperties?: AzureResourcePropertiesBaseUnion;
    type: "AzureResource";
}

// @public
export interface AzureResourcePropertiesBase {
    type: "KeyVault";
}

// @public (undocumented)
export type AzureResourcePropertiesBaseUnion = AzureResourcePropertiesBase | AzureKeyVaultProperties;

// @public
export type AzureResourceType = string;

// @public
export type ClientType = string;

// @public
export interface ConfluentBootstrapServer extends TargetServiceBase {
    endpoint?: string;
    type: "ConfluentBootstrapServer";
}

// @public
export interface ConfluentSchemaRegistry extends TargetServiceBase {
    endpoint?: string;
    type: "ConfluentSchemaRegistry";
}

// @public
export type CreatedByType = string;

// @public
export interface ErrorAdditionalInfo {
    readonly info?: Record<string, unknown>;
    readonly type?: string;
}

// @public
export interface ErrorDetail {
    readonly additionalInfo?: ErrorAdditionalInfo[];
    readonly code?: string;
    readonly details?: ErrorDetail[];
    readonly message?: string;
    readonly target?: string;
}

// @public
export interface ErrorResponse {
    error?: ErrorDetail;
}

// @public
export function getContinuationToken(page: unknown): string | undefined;

// @public
export interface KeyVaultSecretReferenceSecretInfo extends SecretInfoBase {
    name?: string;
    secretType: "keyVaultSecretReference";
    version?: string;
}

// @public
export interface KeyVaultSecretUriSecretInfo extends SecretInfoBase {
    secretType: "keyVaultSecretUri";
    value?: string;
}

// @public
export enum KnownActionType {
    Internal = "Internal"
}

// @public
export enum KnownAuthType {
    Secret = "secret",
    ServicePrincipalCertificate = "servicePrincipalCertificate",
    ServicePrincipalSecret = "servicePrincipalSecret",
    SystemAssignedIdentity = "systemAssignedIdentity",
    UserAssignedIdentity = "userAssignedIdentity"
}

// @public
export enum KnownAzureResourceType {
    KeyVault = "KeyVault"
}

// @public
export enum KnownClientType {
    Django = "django",
    Dotnet = "dotnet",
    Go = "go",
    Java = "java",
    Nodejs = "nodejs",
    None = "none",
    Php = "php",
    Python = "python",
    Ruby = "ruby",
    SpringBoot = "springBoot"
}

// @public
export enum KnownCreatedByType {
    Application = "Application",
    Key = "Key",
    ManagedIdentity = "ManagedIdentity",
    User = "User"
}

// @public
export enum KnownOrigin {
    System = "system",
    User = "user",
    UserSystem = "user,system"
}

// @public
export enum KnownSecretType {
    KeyVaultSecretReference = "keyVaultSecretReference",
    KeyVaultSecretUri = "keyVaultSecretUri",
    RawValue = "rawValue"
}

// @public
export enum KnownTargetServiceType {
    AzureResource = "AzureResource",
    ConfluentBootstrapServer = "ConfluentBootstrapServer",
    ConfluentSchemaRegistry = "ConfluentSchemaRegistry"
}

// @public
export enum KnownValidationResultStatus {
    Failure = "failure",
    Success = "success",
    Warning = "warning"
}

// @public
export enum KnownVNetSolutionType {
    PrivateLink = "privateLink",
    ServiceEndpoint = "serviceEndpoint"
}

// @public
export interface Linker {
    beginCreateOrUpdate(resourceUri: string, linkerName: string, parameters: LinkerResource, options?: LinkerCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<LinkerCreateOrUpdateResponse>, LinkerCreateOrUpdateResponse>>;
    beginCreateOrUpdateAndWait(resourceUri: string, linkerName: string, parameters: LinkerResource, options?: LinkerCreateOrUpdateOptionalParams): Promise<LinkerCreateOrUpdateResponse>;
    beginDelete(resourceUri: string, linkerName: string, options?: LinkerDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    beginDeleteAndWait(resourceUri: string, linkerName: string, options?: LinkerDeleteOptionalParams): Promise<void>;
    beginUpdate(resourceUri: string, linkerName: string, parameters: LinkerPatch, options?: LinkerUpdateOptionalParams): Promise<PollerLike<PollOperationState<LinkerUpdateResponse>, LinkerUpdateResponse>>;
    beginUpdateAndWait(resourceUri: string, linkerName: string, parameters: LinkerPatch, options?: LinkerUpdateOptionalParams): Promise<LinkerUpdateResponse>;
    beginValidate(resourceUri: string, linkerName: string, options?: LinkerValidateOptionalParams): Promise<PollerLike<PollOperationState<LinkerValidateResponse>, LinkerValidateResponse>>;
    beginValidateAndWait(resourceUri: string, linkerName: string, options?: LinkerValidateOptionalParams): Promise<LinkerValidateResponse>;
    get(resourceUri: string, linkerName: string, options?: LinkerGetOptionalParams): Promise<LinkerGetResponse>;
    list(resourceUri: string, options?: LinkerListOptionalParams): PagedAsyncIterableIterator<LinkerResource>;
    listConfigurations(resourceUri: string, linkerName: string, options?: LinkerListConfigurationsOptionalParams): Promise<LinkerListConfigurationsResponse>;
}

// @public
export interface LinkerCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type LinkerCreateOrUpdateResponse = LinkerResource;

// @public
export interface LinkerDeleteOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export interface LinkerGetOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LinkerGetResponse = LinkerResource;

// @public
export interface LinkerList {
    nextLink?: string;
    value?: LinkerResource[];
}

// @public
export interface LinkerListConfigurationsOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LinkerListConfigurationsResponse = SourceConfigurationResult;

// @public
export interface LinkerListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LinkerListNextResponse = LinkerList;

// @public
export interface LinkerListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type LinkerListResponse = LinkerList;

// @public
export interface LinkerPatch {
    authInfo?: AuthInfoBaseUnion;
    clientType?: ClientType;
    readonly provisioningState?: string;
    scope?: string;
    secretStore?: SecretStore;
    targetService?: TargetServiceBaseUnion;
    vNetSolution?: VNetSolution;
}

// @public
export interface LinkerResource extends ProxyResource {
    authInfo?: AuthInfoBaseUnion;
    clientType?: ClientType;
    readonly provisioningState?: string;
    scope?: string;
    secretStore?: SecretStore;
    readonly systemData?: SystemData;
    targetService?: TargetServiceBaseUnion;
    vNetSolution?: VNetSolution;
}

// @public
export interface LinkerUpdateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type LinkerUpdateResponse = LinkerResource;

// @public
export interface LinkerValidateOptionalParams extends coreClient.OperationOptions {
    resumeFrom?: string;
    updateIntervalInMs?: number;
}

// @public
export type LinkerValidateResponse = ValidateOperationResult;

// @public
export interface Operation {
    readonly actionType?: ActionType;
    display?: OperationDisplay;
    readonly isDataAction?: boolean;
    readonly name?: string;
    readonly origin?: Origin;
}

// @public
export interface OperationDisplay {
    readonly description?: string;
    readonly operation?: string;
    readonly provider?: string;
    readonly resource?: string;
}

// @public
export interface OperationListResult {
    readonly nextLink?: string;
    readonly value?: Operation[];
}

// @public
export interface Operations {
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

// @public
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListNextResponse = OperationListResult;

// @public
export interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

// @public
export type OperationsListResponse = OperationListResult;

// @public
export type Origin = string;

// @public
export interface ProxyResource extends Resource {
}

// @public
export interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
}

// @public
export interface SecretAuthInfo extends AuthInfoBase {
    authType: "secret";
    name?: string;
    secretInfo?: SecretInfoBaseUnion;
}

// @public
export interface SecretInfoBase {
    secretType: "rawValue" | "keyVaultSecretReference" | "keyVaultSecretUri";
}

// @public (undocumented)
export type SecretInfoBaseUnion = SecretInfoBase | ValueSecretInfo | KeyVaultSecretReferenceSecretInfo | KeyVaultSecretUriSecretInfo;

// @public
export interface SecretStore {
    keyVaultId?: string;
}

// @public
export type SecretType = string;

// @public (undocumented)
export class ServiceLinkerManagementClient extends coreClient.ServiceClient {
    // (undocumented)
    $host: string;
    constructor(credentials: coreAuth.TokenCredential, options?: ServiceLinkerManagementClientOptionalParams);
    // (undocumented)
    apiVersion: string;
    // (undocumented)
    linker: Linker;
    // (undocumented)
    operations: Operations;
}

// @public
export interface ServiceLinkerManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    $host?: string;
    apiVersion?: string;
    endpoint?: string;
}

// @public
export interface ServicePrincipalCertificateAuthInfo extends AuthInfoBase {
    authType: "servicePrincipalCertificate";
    certificate: string;
    clientId: string;
    principalId: string;
}

// @public
export interface ServicePrincipalSecretAuthInfo extends AuthInfoBase {
    authType: "servicePrincipalSecret";
    clientId: string;
    principalId: string;
    secret: string;
}

// @public
export interface SourceConfiguration {
    name?: string;
    value?: string;
}

// @public
export interface SourceConfigurationResult {
    configurations?: SourceConfiguration[];
}

// @public
export interface SystemAssignedIdentityAuthInfo extends AuthInfoBase {
    authType: "systemAssignedIdentity";
}

// @public
export interface SystemData {
    createdAt?: Date;
    createdBy?: string;
    createdByType?: CreatedByType;
    lastModifiedAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
}

// @public
export interface TargetServiceBase {
    type: "AzureResource" | "ConfluentBootstrapServer" | "ConfluentSchemaRegistry";
}

// @public (undocumented)
export type TargetServiceBaseUnion = TargetServiceBase | AzureResource | ConfluentBootstrapServer | ConfluentSchemaRegistry;

// @public
export type TargetServiceType = string;

// @public
export interface UserAssignedIdentityAuthInfo extends AuthInfoBase {
    authType: "userAssignedIdentity";
    clientId?: string;
    subscriptionId?: string;
}

// @public
export interface ValidateOperationResult {
    authType?: AuthType;
    isConnectionAvailable?: boolean;
    linkerName?: string;
    reportEndTimeUtc?: Date;
    reportStartTimeUtc?: Date;
    resourceId?: string;
    sourceId?: string;
    status?: string;
    targetId?: string;
    validationDetail?: ValidationResultItem[];
}

// @public
export interface ValidationResultItem {
    description?: string;
    errorCode?: string;
    errorMessage?: string;
    name?: string;
    result?: ValidationResultStatus;
}

// @public
export type ValidationResultStatus = string;

// @public
export interface ValueSecretInfo extends SecretInfoBase {
    secretType: "rawValue";
    value?: string;
}

// @public
export interface VNetSolution {
    type?: VNetSolutionType;
}

// @public
export type VNetSolutionType = string;

// (No @packageDocumentation comment for this package)

```

// https://github.com/karma-runner/karma-chrome-launcher
process.env.CHROME_BIN = require("puppeteer").executablePath();
require("dotenv").config();
const { relativeRecordingsPath } = require("@azure-tools/test-recorder");

process.env.RECORDINGS_RELATIVE_PATH = relativeRecordingsPath();

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "./",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["mocha"],

    plugins: [
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-env-preprocessor",
      "karma-coverage",
      "karma-sourcemap-loader",
      "karma-junit-reporter",
      "karma-json-preprocessor",
      "karma-json-to-file-reporter",
    ],

    // list of files / patterns to load in the browser
    files: [
      "dist-test/index.browser.js",
      {
        pattern: `pattern: "dist-test/index.browser.js.map`,
        type: "html",
        included: false,
        served: true,
      },
    ],

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "**/*.js": ["sourcemap", "env"],
      // IMPORTANT: COMMENT following line if you want to debug in your browsers!!
      // Preprocess source file to calculate code coverage, however this will make source file unreadable
      // [`dist-test/${testMode}.index.browser.js`]: ["coverage"]
    },

    // inject following environment values into browser testing with window.__env__
    // environment values MUST be exported or set with same console running "karma start"
    // https://www.npmjs.com/package/karma-env-preprocessor
    envPreprocessor: [
      "ACCOUNT_NAME",
      "ACCOUNT_KEY",
      "TABLES_URL",
      "SAS_TOKEN",
      "TEST_MODE",
      "SAS_CONNECTION_STRING",
      "ACCOUNT_CONNECTION_STRING",
      "AZURE_TENANT_ID",
      "AZURE_CLIENT_ID",
      "AZURE_CLIENT_SECRET",
      "RECORDINGS_RELATIVE_PATH",
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha", "coverage", "junit"],

    coverageReporter: {
      // specify a common output directory
      dir: "coverage-browser/",
      reporters: [
        { type: "json", subdir: ".", file: "coverage.json" },
        { type: "lcovonly", subdir: ".", file: "lcov.info" },
        { type: "html", subdir: "html" },
        { type: "cobertura", subdir: ".", file: "cobertura-coverage.xml" },
      ],
    },

    junitReporter: {
      outputDir: "", // results will be saved as $outputDir/$browserName.xml
      outputFile: "test-results.browser.xml", // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: "", // suite will become the package name attribute in xml testsuite element
      useBrowserName: false, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
      properties: {}, // key value pair of properties to add to the <properties> section of the report
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // 'ChromeHeadless', 'Chrome', 'Firefox', 'Edge', 'IE'
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        //--no-sandbox allows our tests to run in Linux without having to change the system.
        // --disable-web-security allows us to authenticate from the browser without setting up special CORS configuration
        flags: ["--no-sandbox", "--disable-web-security"],
      },
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1,

    browserNoActivityTimeout: 600000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,

    client: {
      mocha: {
        // change Karma's debug.html to the mocha web reporter
        reporter: "html",
        timeout: "600000",
      },
    },
    args: config.testMode ? ["--testMode"] : [],
  });
};
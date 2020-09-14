// An example configuration file.
exports.config = {
  directConnect: true,
  allScriptsTimeout: 11000,
  //   baseUrl: "",

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Assign the test reporter to each running instance
  framework: "jasmine",
  onPrepare: function () {
    let HtmlReporter = require("protractor-beautiful-reporter");
    jasmine.getEnv().addReporter(
      new HtmlReporter({
        baseDirectory: "reports_new",
        screenshotsSubfolder: "screenshotsOnFailure",
        takeScreenShotsOnlyForFailedSpecs: true,
        jsonsSubfolder: "jsonFiles",
        excludeSkippedSpecs: true,
        preserveDirectory: false,
        clientDefaults: {
          showTotalDurationIn: "header",
          totalDurationFormat: "h:m:s",
          gatherBrowserLogs: true,
        },
      }).getJasmine2Reporter()
    );
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine2",

  // Spec patterns are relative to the current working directory when
  // include glob patterns.
  suites: {
    homepage: "./src/specs/**/*.specs.js",
  },

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000,
  },

  //Possibilita criar várias instâncias de navegadores, diferentes ou não, para realizar teste de estresse
  // em paralelo certificando que a aplicação e os próprios testes estão estáveis , porém se deve tomar cuidado
  //devido ao uso de recusos da maquina que está rodando os testes
  multiCapabilities: [
    {
      browserName: "chrome",
    },
  ],
};

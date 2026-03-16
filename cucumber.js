module.exports = {

  default: {

    paths: [
      "features/**/*.feature"
    ],

    require: [
      "step-definitions/**/*.js",
      "support/**/*.js"
    ],

    format: [
      "progress",
      "json:reports/report.json",
      "allure-cucumberjs/reporter",
      "html:reports/cucumber-report.html"
    ],

    formatOptions: {
      resultsDir: "allure-results"
    }

  }

}
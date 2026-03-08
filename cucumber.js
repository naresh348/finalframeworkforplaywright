module.exports = {

default: {
  

require: [
"step-definitions/loginSteps.js",
"support/hooks.js","support/world.js"

], //////

format: [
"progress",
"json:reports/report.json",
"allure-cucumberjs/reporter",
      "html:reports/cucumber-report.html"



],
formatOptions: {
      resultsDir: "allure-results" // allure reports
    }
    
}

}
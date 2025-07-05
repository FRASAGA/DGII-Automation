const reporter = require("cucumber-html-reporter");

reporter.generate({
  theme: "bootstrap",
  jsonFile: "cypress/reports/cucumber_report.json",
  output: "cypress/reports/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App": "DGII Login Test",
    "Platform": "Web",
    "Executed": "Local"
  }
});

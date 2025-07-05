const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const path = require("path");
module.exports = defineConfig({
 e2e: {
   async setupNodeEvents(on, config) {
     await addCucumberPreprocessorPlugin(on, config);
     on(
       "file:preprocessor",
       createBundler({
         plugins: [createEsbuildPlugin(config)],
       })
     );
     return config;
   },
   specPattern: "cypress/e2e/features/**/*.feature",
   baseUrl: "http://the-internet.herokuapp.com",
   supportFile: "cypress/support/e2e.js",
 },
});

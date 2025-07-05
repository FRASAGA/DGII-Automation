const createEsbuildPlugin = require('cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const path = require("path");
module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", createBundler({
    plugins: [createEsbuildPlugin.default(config)]
  }));
  return config;
};

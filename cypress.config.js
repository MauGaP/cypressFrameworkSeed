const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'https://localhost:8000/',
    specPattern: "cypress/e2e/**/*.feature",
  },
});

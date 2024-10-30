   // cypress.config.js
   const { defineConfig } = require('cypress');

   module.exports = defineConfig({
     e2e: {
       // Configuration options for end-to-end testing
       baseUrl: 'http://localhost:4200', // Replace with your application's base URL
       //supportFile: 'cypress/support/e2e.js', // Path to your support file
     },
   });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
     this.watchForFileChanges= false,
     this.responseTimeout=60000,
     this.screenshotOnRunFailure=false,
     this.video=false,
     this.defaultCommandTimeout= 1000
    //this.baseUrl="http://opencart.abstracta.us" //
    } 
  }
})


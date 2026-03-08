const { Before, After } = require("@cucumber/cucumber")
const { chromium } = require("playwright")
const config = require("../config/config")
const setPage= require("./world")

Before(async function () {

    this.browser = await chromium.launch({
        headless: config.HEADLESS,
        args: ['--start-maximized']


    });

    const context = await this.browser.newContext({
        viewport: null   // This makes browser full screen
           
    });


    const page = await context.newPage()


    this.setPage(page)

})



After(async function (scenario) {

  if (scenario.result.status === "FAILED") {

    const screenshot = await this.page.screenshot({    //this.page Comes from the Cucumber World object
      path: `screenshots/${Date.now()}.png`, //Date.now() ensures unique screenshot names.
      fullPage: true  //Captures the entire page, not just the visible area.
    });

     await this.attach(screenshot, "image/png");  //It attaches the screenshot to the Cucumber report.
    }

  

    await this.browser.close();
  
  

});

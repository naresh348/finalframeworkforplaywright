const { Given, When, Then } = require("@cucumber/cucumber")
const { expect } = require("chai")
const logger = require("../utils/logger")


let loginPage
let dashboardPage

Given('User navigates to the application', async function () {

    logger.info("Launching application")

    loginPage = this.poManager.getLoginPage()

    await loginPage.navigate()

})

When('User login with username {string} and password {string}', async function (user,pass) {

    logger.info("Entering username")
    //logger.error("Login failed")


    await loginPage.login(user,pass)

})

Then('Login should be successful', async function () {

    dashboardPage = this.poManager.getDashboardPage()

    const result = await dashboardPage.verifyLoginSuccess()

    expect(result).to.be.true

})
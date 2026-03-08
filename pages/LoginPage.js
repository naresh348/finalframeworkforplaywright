const config = require("../config/config")

class LoginPage {

    constructor(page)
    {
        this.page = page
        this.username = page.locator("#username")
        this.password = page.locator("#password")
        this.loginBtn = page.locator("#submit")
    }

    async navigate()
    {
        await this.page.goto(config.BASE_URL)
    }

    async login(username,password)
    {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

}

module.exports = { LoginPage }
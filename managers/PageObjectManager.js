const { LoginPage } = require("../pages/LoginPage")
const { DashboardPage } = require("../pages/DashboardPage")

class PageObjectManager {

    constructor(page)
    {
        this.page = page
    }

    getLoginPage()
    {
        if(!this.loginPage) //if login is not created it stores and return it
        {
            this.loginPage = new LoginPage(this.page)
        }
        return this.loginPage
    }

    getDashboardPage()
    {
        if(!this.dashboardPage)
        {
            this.dashboardPage = new DashboardPage(this.page)
        }
        return this.dashboardPage
    }

}

module.exports = { PageObjectManager }
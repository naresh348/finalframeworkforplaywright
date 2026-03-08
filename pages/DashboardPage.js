class DashboardPage {

    constructor(page)
    {
        this.page = page
        this.successText = page.locator(".post-title")
    }

    async verifyLoginSuccess()
    {
        return await this.successText.isVisible()
    }

}

module.exports = { DashboardPage }
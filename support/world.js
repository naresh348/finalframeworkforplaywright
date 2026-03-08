const { setWorldConstructor } = require("@cucumber/cucumber") //setWorldConstructor is used to create a custom World class in Cucumberthings stored in World:browser,page,test data,page objects.
const { PageObjectManager } = require("../managers/PageObjectManager")

class CustomWorld {

    setPage(page)
    {
        this.page = page
        this.poManager = new PageObjectManager(page)
    }

}

setWorldConstructor(CustomWorld)
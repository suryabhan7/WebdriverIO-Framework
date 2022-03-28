import loginPage from "../main/pages/login.page";

describe('Smoke Test', () => {

    it('should validte page title', () => {
        loginPage.openApp()
        expect(browser).toHaveTitle("OrangeHRM")
    })

})
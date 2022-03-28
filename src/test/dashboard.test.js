import { LOGIN_PASSWORD, LOGIN_USERNAME } from "../main/config/configdata";
import dashboardPage from "../main/pages/dashboard.page";
import loginPage from "../main/pages/login.page";

describe('Test Dashboard Page', () => {

    beforeEach('should login to application', () => {
        loginPage.openApp();
        loginPage.doLogin(LOGIN_USERNAME, LOGIN_PASSWORD)
    })

    afterEach('should logout from app', () => {
        loginPage.doLogout();
    })

    it('should verify brand image existence', () => {
        expect(dashboardPage.isBrandImageExist()).toBeTruthy();
    })

    it('should verify dashboard page elements presence', () => {
        expect(dashboardPage.isQuickLaunchDisplayed()).toBeTruthy();
        expect(dashboardPage.isAssignLeaveExists()).toBeTruthy();
        expect(dashboardPage.isLeaveListExists()).toBeTruthy();
        expect(dashboardPage.isTimesheetsExists()).toBeTruthy();
        expect(dashboardPage.isEDSDisplayed()).toBeTruthy();
        expect(dashboardPage.isLegendDisplayed()).toBeTruthy();
        expect(dashboardPage.isPLRDisplayed()).toBeTruthy();
        expect(dashboardPage.isFooterDisplayed()).toBeTruthy();
    })

});
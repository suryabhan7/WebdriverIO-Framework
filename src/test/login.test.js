import loginPage from '../main/pages/login.page';
import dashboardPage from '../main/pages/dashboard.page';
import { LOGIN_PAGE_HEADER, LOGIN_PAGE_INVALID_CRED } from '../main/constants/FrameworkContants';
import { LOGIN_INVALID_PASSWORD, LOGIN_INVALID_USER, LOGIN_PASSWORD, LOGIN_USERNAME } from '../main/config/configdata';

describe('Test LoginPage of Orange HRMlive', () => {

    beforeEach('Open App', () => {
        loginPage.openApp();
    })

    describe('Login page fields', () => {

        it('Should verify login page title', () => {
            expect(browser).toHaveTitle(LOGIN_PAGE_HEADER);
        });

        it('Should verify login page header', () => {
            expect(loginPage.isLoginHeaderDisplayed()).toBeTruthy();
        })

        it('Should verify forgot password link', () => {
            expect(loginPage.isForgotPasswordDisplayed()).toBeTruthy();
        })
    })

    it('Should verify invalid login', () => {
        loginPage.doLogin(LOGIN_INVALID_USER, LOGIN_INVALID_PASSWORD);
        expect(loginPage.invalidCredError).toHaveText(LOGIN_PAGE_INVALID_CRED);
    })

    it('Should verify valid login', () => {
        loginPage.doLogin(LOGIN_USERNAME, LOGIN_PASSWORD);
        expect(dashboardPage.isBrandImageExist()).toBeTruthy();
        loginPage.doLogout();
    })

});
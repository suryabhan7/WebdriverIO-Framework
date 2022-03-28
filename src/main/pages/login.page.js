import Page from './page';

class LoginPage extends Page {

    //Locatores
    get loginHeader() { return $('#logInPanelHeading') }
    get txtUser() { return $('#txtUsername') }
    get txtPassword() { return $('#txtPassword') }
    get btnLogin() { return $('#btnLogin') }
    get lnkForgotPassword() { return $('=Forgot your password?') }
    get invalidCredError() { return $("#spanMessage") }

    get welcomeIcon() { return $("#welcome") }
    get logoutLink() { return $("//a[text()='Logout']") }

    //Action Methods
    openApp() {
        super.open("https://opensource-demo.orangehrmlive.com")
    }

    isLoginHeaderDisplayed() {
        return this.isElementDisplayed(this.loginHeader);
    }

    isForgotPasswordDisplayed() {
        return this.isElementDisplayed(this.lnkForgotPassword);
    }

    doLogin(userid, pwd) {
        this.setData(this.txtUser, userid);
        this.setData(this.txtPassword, pwd);
        this.clickElement(this.btnLogin);
    }

    doLogout() {
        this.clickElement(this.welcomeIcon)
        this.clickElement(this.logoutLink);
        if (this.loginHeader.isDisplayed() == false && this.welcomeIcon.isDisplayed()) {
            this.clickElement(this.welcomeIcon)
            this.clickElement(this.logoutLink);
        }
    }

}
export default new LoginPage();
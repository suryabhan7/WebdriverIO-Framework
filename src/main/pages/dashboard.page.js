import Page from "./page"

class Dashboard extends Page {

    //Locators
    get brandImg() { return $('#branding>a>img') }
    get quickLaunchMenu() { return $("//legend[text()='Quick Launch']/parent::*") }
    get assignLeave() { return $("//span[contains(text(),'Assign Leave')]/parent::a/parent::div") }
    get leaveList() { return $("//span[contains(text(),'Leave List')]/parent::a/parent::div") }
    get timeSheets() { return $("//span[contains(text(),'Timesheets')]/parent::a/parent::div") }
    get EDS() { return $("//legend[text()='Employee Distribution by Subunit']/parent::*") }
    get legend() { return $("//legend[text()='Legend']/parent::*") }
    get PLR() { return $("//legend[text()='Pending Leave Requests']/parent::*") }
    get footer() { return $('#footer') }

    //Action Methods
    isBrandImageExist() { return this.isElementExisting(this.brandImg); }
    isQuickLaunchDisplayed() { return this.isElementDisplayed(this.quickLaunchMenu); }
    isAssignLeaveExists() { return this.isElementExisting(this.assignLeave); }
    isLeaveListExists() { return this.isElementExisting(this.leaveList); }
    isTimesheetsExists() { return this.isElementExisting(this.timeSheets); }
    isEDSDisplayed() { return this.isElementDisplayed(this.EDS); }
    isLegendDisplayed() { return this.isElementDisplayed(this.legend); }
    isPLRDisplayed() { return this.isElementDisplayed(this.PLR); }
    isFooterDisplayed() { return this.isElementDisplayed(this.footer); }
}
export default new Dashboard();
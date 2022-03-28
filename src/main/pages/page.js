import WaitUtils from '../util/WaitUtils';
import { CLICKABLE, DISPLAYED, EXIST } from '../constants/WaitConstants';
import { addLog } from '../util/ReportUtils';

export default class Page {

    open(appurl) {
        browser.url(appurl);
        addLog(`Opening URL: ${appurl}`)
        browser.maximizeWindow();
        addLog('Maximizing window')
    }

    clickElement(element) {
        addLog(`clicking on Element: [ ${element.selector} ]`)
        WaitUtils.WaitFactory(element, CLICKABLE).click()
    }

    setData(element, value) {
        addLog(`Entering value: ${value}`)
        WaitUtils.WaitFactory(element, DISPLAYED).setValue(value);
    }

    isElementDisplayed(element) {
        let status = WaitUtils.WaitFactory(element, DISPLAYED).isDisplayed();
        addLog(`Element [ ${element.selector} ] is displyed : ${status}`)
        return status;
    }

    isElementExisting(element) {
        let status = WaitUtils.WaitFactory(element, EXIST).isExisting();
        addLog(`Element [ ${element.selector} ] is existing : ${status}`)
        return status;
    }
}
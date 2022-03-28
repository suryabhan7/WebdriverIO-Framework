import { config } from "../../../wdio.conf";

class WaitUtils {

    getErrorMsg(element, waittype) {
        return `Failed while waiting for ${JSON.stringify(element.selector)}  to be ${waittype}`;
    }

    WaitFactory(element, waittype) {
        const errorTimeout = config.waitforTimeout;
        if (waittype == "CLICKABLE") {
            browser.waitUntil(() => element.isClickable(), { timeout: errorTimeout, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "DISPLAYED") {
            browser.waitUntil(() => element.isDisplayed(), { timeout: errorTimeout, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "ENABLED") {
            browser.waitUntil(() => element.isEnabled(), { timeout: errorTimeout, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else if (waittype == "EXIST") {
            browser.waitUntil(() => element.isExisting(), { timeout: errorTimeout, timeoutMsg: this.getErrorMsg(element, waittype) })
            return element;
        }
        else {
            return element;
        }
    }

}
export default new WaitUtils()
import demoqaPage from "../main/pages/demoqa.page";

describe("Test frames of DemoQA", () => {

    it("should switch between frames", () => {
        demoqaPage.openApp('frames');
        browser.switchToFrame(demoqaPage.pageFrame);
        expect(demoqaPage.frameHeading).toHaveText("This is a sample page")
        browser.switchToParentFrame();
        expect(demoqaPage.mainHeader).toHaveText("Frames")
    })

})
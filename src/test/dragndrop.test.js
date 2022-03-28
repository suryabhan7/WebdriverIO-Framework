import demoqaPage from "../main/pages/demoqa.page";

describe("Test droppable element of DemoQA", () => {

    it("Should drag and drop element", () => {
        demoqaPage.openApp('droppable');
        demoqaPage.dragElement.dragAndDrop(demoqaPage.dropElement);
        browser.pause(3000);
        expect(demoqaPage.textDropped).toHaveText("Dropped!");
    })
})
import Page from "./page";

class DemoQAPage extends Page {

    openApp(page) {
        super.open(`https://demoqa.com/${page}`);
    }

    //Drag and Drop Page
    get dragElement() { return $('#draggable'); }
    get dropElement() { return $('#simpleDropContainer>#droppable'); }
    get textDropped() { return $('#simpleDropContainer>#droppable>p'); }

    //Frames Page
    get mainHeader() { return $('.main-header'); }
    get pageFrame() { return $('#frame1'); }
    get frameHeading() { return $('#sampleHeading'); }

}
export default new DemoQAPage()
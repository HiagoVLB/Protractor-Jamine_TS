import {browser, element, by} from 'protractor';

export const Utilities = {
    "clickOnText": (typeEl: string, text: string) => {
        element(by.cssContainingText(typeEl,text)).click();
    }
}
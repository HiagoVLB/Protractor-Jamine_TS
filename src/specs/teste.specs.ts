import { browser, element, by } from "protractor";
import * as config from "./../assets/configuration.json";
import * as utility from "./../util/utility";

describe("protractor with typescript typings", () => {
  afterEach(() => {
    browser.sleep(config.sleepTime.pageLoad);
  });

  it("should greet the named user", () => {
    browser.get("http://www.angularjs.org");
    element(by.model("yourName")).sendKeys("Julie");
    let greeting = element(by.binding("yourName"));
    expect(greeting.getText()).toEqual("Hello Julie!");
  });

  it("should click on create sample projectin StackBlitsz", () => {
    browser.get("https://angular.io/start");
    utility.Utilities.clickOnText("span", "Resource");
  });
});

const { test, expect } = require("@playwright/test");
class homePage {
  constructor(page) {
    this.page = page;
    this.loginButtonSelector = page.locator("a[href='/login']");
  }

  async goToHomePage() {
    const homepageUrl = "https://automationexercise.com/";
    await this.page.goto(homepageUrl);
  }

  async verifyHomePage() {
    await expect(this.page).toHaveTitle("Automation Exercise");
    await expect(this.page).toHaveURL("https://automationexercise.com/");
  }

  async ClickloginButton() {
    await this.loginButtonSelector.click();
  }
}

export default homePage;

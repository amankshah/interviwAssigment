const { test, expect } = require("@playwright/test");
class homePage {
  constructor(page) {
    this.page = page;
    this.loginButtonSelector = page.locator("a[href='/login']");
    this.loggedInAsButton = page.locator(
      "//a[contains(text(),'Logged in as')]"
    );
    this.accountDeleteButton = page.locator("a[href='/delete_account']");
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
  async verifyLoggedInAsButton(registerUserName) {
    // wait for this.loggedInAsButton
    await this.loggedInAsButton.waitFor({ state: "visible", timeout: 10000 });
    await expect(this.loggedInAsButton).toBeVisible();

    const loggedInAsButtonText = await this.loggedInAsButton.textContent();
    const expectedText = `Logged in as ${registerUserName}`;
    expect(this.loggedInAsButton).toHaveText(expectedText);
    console.log(loggedInAsButtonText);
  }

  async clickAccountDeleteButton() {
    expect(this.accountDeleteButton).toBeVisible();
    await this.accountDeleteButton.click();
  }
}

export default homePage;

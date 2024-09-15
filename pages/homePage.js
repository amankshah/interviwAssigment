const { test, expect } = require("@playwright/test");
class homePage {
  constructor(page) {
    this.page = page;
    this.loginButtonSelector = page.locator("a[href='/login']");
    this.loggedInAsButton = page.locator(
      "//a[contains(text(),'Logged in as')]"
    );
    this.accountDeleteButton = page.locator("a[href='/delete_account']");
    this.productButton = page.locator("a[href='/products']");
    this.cartButton = page.locator("a[href='/view_cart']").first();
    this.logoutButton = page.locator("a[href='/logout']");

    //footer
    this.footerSection = page.locator("#footer");

    this.subscriptionLabel = page.locator(".single-widget h2");
    this.subscriberEmailField = page.locator("#susbscribe_email");
    this.subscribeEmailSubmitButton = page.locator("#subscribe");
    this.subscribeSuccessMessage = page.locator("#success-subscribe");
    this.fullFledgedText = this.page
      .getByRole("heading")
      .filter({ hasText: "Full-Fledged practice" });
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

  async verifyAccountDeleteButtonIsVisible() {
    await this.accountDeleteButton.waitFor({
      state: "visible",
      timeout: 10000,
    });
    await expect(this.accountDeleteButton).toBeVisible();
    console.log("Account Delete Button Visible");
  }
  async clickAccountDeleteButton() {
    await this.accountDeleteButton.waitFor({
      state: "visible",
      timeout: 10000,
    });
    expect(this.accountDeleteButton).toBeVisible();
    await this.accountDeleteButton.click();
    console.log("Account Delete Button Clicked");
  }

  async verifyProductButtonIsVisible() {
    await this.productButton.waitFor({ state: "visible", timeout: 10000 });
    await expect(this.productButton).toBeVisible();
    console.log("Product Button Visible");
  }

  async clickProductButton() {
    expect(this.productButton).toBeVisible();
    await this.productButton.click();
    console.log("Product Button Clicked");
  }

  async verifyCartButtonIsVisible() {
    await this.cartButton.waitFor({ state: "visible", timeout: 10000 });
    await expect(this.cartButton).toBeVisible();
    console.log("Cart Button Visible");
  }

  async clickCartButton() {
    expect(this.cartButton).toBeVisible();
    await this.cartButton.click();
    console.log("Cart Button Clicked");
  }

  async verifySubscriptionLabel() {
    await expect(this.subscriptionLabel).toBeVisible();
    await expect(this.subscriptionLabel).toHaveText("Subscription");
    console.log("Subscription Label Verified");
  }
  async scrollToBottom() {
    await this.footerSection.scrollIntoViewIfNeeded();
    console.log("Scrolled to Bottom");
  }

  async scrollToFullFledgedText() {
    await this.fullFledgedText.scrollIntoViewIfNeeded();
    console.log("Scrolled to Full Fledged Text");
  }
  async verifyFullFledgedTextIsVisible() {
    await Promise.all([
      await this.fullFledgedText.waitFor({ state: "visible", timeout: 10000 }),
      expect(this.fullFledgedText).toBeVisible(),
    ]);
    console.log("Full Fledged Text Verified");
  }
}

export default homePage;

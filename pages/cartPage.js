const { test, expect } = require("@playwright/test");
class cartPage {
  constructor(page) {
    this.page = page;
    this.footerSection = page.locator("#footer");
    this.subscriptionLabel = page.locator(".single-widget h2");
    this.subscriberEmailField = page.locator("#susbscribe_email");
    this.subscribeEmailSubmitButton = page.locator("#subscribe");
    this.subscribeSuccessMessage = page.locator("#success-subscribe");
  }

  async goToCartPage() {
    await this.page.goto("https://automationexercise.com/view_cart");
  }

  async scrollToFooter() {
    await this.footerSection.scrollIntoViewIfNeeded();
  }

  async verifySubscriptionLabel() {
    await expect(this.subscriptionLabel).toBeVisible();
    await expect(this.subscriptionLabel).toHaveText("Subscription");
    console.log("Subscription Label Verified");
  }

  async submitEmailInSubscription(Email) {
    await expect(this.subscriberEmailField).toBeVisible();
    await expect(this.subscribeEmailSubmitButton).toBeVisible();
    await this.subscriberEmailField.fill(Email);
    console.log("submitted Email : " + Email + " in subscription");
    await this.subscribeEmailSubmitButton.click();
    console.log("Clicked on Subscribe Email Submit Button");
  }

  async verifySubscriptionSuccessMessage() {
    await expect(this.subscribeSuccessMessage).toBeVisible();
    console.log("Subscription Success Message Verified");
    console.log(
      "Subscription Success is read as : " +
        (await this.subscribeSuccessMessage.textContent())
    );
  }
}
export default cartPage;

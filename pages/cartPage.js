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

  async verifyProductPriceQuantityAndTotalPrice() {
    const productInCart = await this.page.locator("tbody tr").count();

    for (let i = 0; i < productInCart; i++) {
      let productPriceText = await this.page
        .locator("tbody tr:nth-child(" + (i + 1) + ") .cart_price p")
        .textContent();
      let productPrice = parseInt(productPriceText.replace("Rs. ", "").trim());
      console.log("Product " + i + " Price : " + productPrice);

      let productQuantityText = await this.page
        .locator("tbody tr:nth-child(" + (i + 1) + ") .cart_quantity button")
        .textContent();
      let productQuantity = parseInt(productQuantityText);
      console.log("Product " + i + " Quantity : " + productQuantity);

      let productTotalPriceText = await this.page
        .locator("tbody tr:nth-child(" + (i + 1) + ") .cart_total_price")
        .textContent();
      let productTotalPrice = parseInt(
        productTotalPriceText.replace("Rs. ", "").trim()
      );
      console.log("Product " + i + " Total Price : " + productTotalPrice);

      let expectedTotalPrice = productPrice * productQuantity;
      console.log(
        "Product " + i + " Expected Total Price : " + expectedTotalPrice
      );

      expect(productTotalPrice).toBe(expectedTotalPrice);
    }
  }
}

export default cartPage;

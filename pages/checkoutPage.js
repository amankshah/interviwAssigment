const { test, expect } = require("@playwright/test");
class checkoutPage {
  constructor(page) {
    this.page = page;
    this.messageBox = page.locator("textarea[name='message']");
    this.placeOrderButton = page.locator(".check_out");
  }

  async fillMessage(message) {
    await this.messageBox.fill(message);
    console.log("Entered Message : " + message);
  }

  async clickPlaceOrderButton() {
    await this.placeOrderButton.click();
    console.log("Clicked on Place Order Button");
  }
}
export default checkoutPage;

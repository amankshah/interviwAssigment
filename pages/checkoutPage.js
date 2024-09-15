const { test, expect } = require("@playwright/test");
class checkoutPage {
  constructor(page) {
    this.page = page;
  }
}
export default checkoutPage;
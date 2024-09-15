const { test, expect } = require("@playwright/test");
class accountCreatedPage {
  constructor(page) {
    this.page = page;
    this.pageUrl = "https://automationexercise.com/account_created";
    this.AccountCreatedLabel = page.locator("h2 b");
    this.ContinueButton = page.locator(".btn.btn-primary");
  }

  async verifyAccountCreatedPage() {
    await this.AccountCreatedLabel.waitFor({ state: "visible", timeout: 10000 });
    expect(this.AccountCreatedLabel).toBeVisible();
    const accountCreatedText = await this.AccountCreatedLabel.textContent();
    expect(accountCreatedText).toBe("Account Created!");
  }

  async clickContinueButtonOnAccountCreatedPage() {
    await this.ContinueButton.click();
  }
}
export default accountCreatedPage;

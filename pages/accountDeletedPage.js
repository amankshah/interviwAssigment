const { test, expect } = require("@playwright/test");
class AccountDeletedPage {
  constructor(page) {
    this.page = page;
    this.AccountDeletedPageUrl =
      "https://automationexercise.com/delete_account";
    this.AccountDeletedLabel = page.locator("h2 b");
    this.ContinueButton = page.locator(".btn.btn-primary");
  }

  async goToAccountDeletedPage() {
    await this.page.goto(this.AccountDeletedPageUrl);
  }

  async verifyAccountDeletedPage() {
    expect(this.AccountDeletedLabel).toBeVisible();
    const accountDeletedText = await this.AccountDeletedLabel.textContent();
    expect(accountDeletedText).toBe("Account Deleted!");

    console.log("Account Deleted Label : " + accountDeletedText);
  }

  async clickContinueButtonOnAccountDeletedPage() {
    await this.ContinueButton.click();
  }
}
export default AccountDeletedPage;

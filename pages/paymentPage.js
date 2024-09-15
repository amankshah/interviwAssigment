const { test, expect } = require("@playwright/test");
class paymentPage {
  constructor(page) {
    this.page = page;
    this.nameOnCardFilled = page.locator("input[name='name_on_card']");
    this.cardNumberFilled = page.locator("input[name='card_number']");
    this.monthFilled = page.locator("input[name='expiry_month']");
    this.yearFilled = page.locator("input[name='expiry_year']");
    this.cvcFilled = page.locator("input[name='cvc']");

    this.payAndConfirmOrderButton = page.locator(".submit-button");
    this.paymentSuccessMessage = page.locator(
      "#success_message .alert-success"
    );

    //Payment success page elements
    this.DownloadInvoiceButton = page.locator(".check_out");
    this.continueButton = page.locator(".btn.btn-primary");
  }

  async paymentDetails(nameOnCard, cardNumber, month, year, cvc) {
    await this.nameOnCardFilled.fill(nameOnCard);
    await this.cardNumberFilled.fill(cardNumber);
    await this.monthFilled.fill(month);
    await this.yearFilled.fill(year);
    await this.cvcFilled.fill(cvc);

    console.log("Payment Details filled successfully");
  }

  async verifyPaymentSuccessMessage() {
    await Promise.all([
      expect(this.paymentSuccessMessage).toHaveText(
        "Your order has been placed successfully!",
        { timeout: 10000 }
      ),
      await this.payAndConfirmOrderButton.click(),
    ]);
  }

  async verifyWhetherInvoiceDownloaded() {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.DownloadInvoiceButton.click(),
    ]);

    const downloadPath = "downloads/invoice.pdf"; // Update this to the correct path
    await download.saveAs(downloadPath);

    console.log("Invoice Downloaded Successfully");
    console.log("Invoice Saved at : " + downloadPath);
  }

  async clickDownloadInvoiceButton() {
    await this.DownloadInvoiceButton.click();
    console.log("Clicked on Download Invoice Button");
  }

  async clickContinueButton() {
    await this.continueButton.click();
    console.log("Clicked on Continue Button");
  }
}
export default paymentPage;
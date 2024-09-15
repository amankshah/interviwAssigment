const { test, expect } = require("@playwright/test");

const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));

class accountInformationPage {
  constructor(page) {
    this.page = page;
    this.accountInformationUrl = "https://automationexercise.com/signup";
    this.EnterAccountInformation = page.locator(".login-form h2 b").first();

    //Title ----------------------------
    this.MrRadioButton = page.locator("input[value='Mr']");
    this.MrsRadioButton = page.locator("input[value='Mrs']");
    //Title End--------------------------------
    this.NameField = page.locator("#name");
    this.EmailField = page.locator("#email");
    this.PasswordField = page.locator("#password");
    //Dob-----------------------------
    this.days = page.locator("#days");
    this.months = page.locator("#months");
    this.years = page.locator("#years");
    //Dob End--------------------------------
    this.NewsletterCheckBox = page.locator("#newsletter");
    this.SpecialOffersCheckBox = page.locator("#optin");
    this.FirstNameField = page.locator("#first_name");
    this.LastNameField = page.locator("#last_name");
    this.CompanyField = page.locator("#company");
    this.AddressField = page.locator("#address1");
    this.Address2Field = page.locator("#address2");
    this.CountryField = page.locator("#country");
    this.StateField = page.locator("#state");
    this.CityField = page.locator("#city");
    this.ZipcodeField = page.locator("#zipcode");
    this.MobileNumberField = page.locator("#mobile_number");
    this.CreateAccountButton = page.locator("button[type='submit']").first();
  }

  async goto() {
    await this.page.goto(this.accountInformationUrl);
  }

  async verifyAccountInformationPage() {
    expect(this.EnterAccountInformation).toBeVisible();
    expect(this.EnterAccountInformation).toHaveText(
      "Enter Account Information"
    );
  }

  async FillDataAndCreateAccount() {
    //As this will be taking number of variables so we will fetch the data directly from the testData.json

    //Title ----------------------------
    if (testData.accountInformation.Title == "Mr") {
      await this.MrRadioButton.check();
    } else {
      await this.MrsRadioButton.check();
    }

    //Title End--------------------------------

    await this.PasswordField.fill(testData.accountInformation.Password);
    await this.days.selectOption({
      label: testData.accountInformation.Dob.Day,
    });
    await this.months.selectOption({
      label: testData.accountInformation.Dob.Month,
    });
    await this.years.selectOption({
      label: testData.accountInformation.Dob.Year,
    });
    await this.NewsletterCheckBox.check();
    await this.SpecialOffersCheckBox.check();
    await this.FirstNameField.fill(testData.accountInformation.FirstName);
    await this.LastNameField.fill(testData.accountInformation.LastName);
    await this.CompanyField.fill(testData.accountInformation.Company);
    await this.AddressField.fill(testData.accountInformation.Address);
    await this.Address2Field.fill(testData.accountInformation.Address2);
    await this.CountryField.selectOption({
      label: testData.accountInformation.Country,
    });
    await this.StateField.fill(testData.accountInformation.State);
    await this.CityField.fill(testData.accountInformation.City);
    await this.ZipcodeField.fill(testData.accountInformation.ZipCode);
    await this.MobileNumberField.fill(testData.accountInformation.MobileNumber);
    await this.CreateAccountButton.click();
  }
}
export default accountInformationPage;

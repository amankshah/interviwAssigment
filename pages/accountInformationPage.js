const { test, expect } = require("@playwright/test");
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
}
export default accountInformationPage;

const { test, expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.LoginPageUrl = "https://automationexercise.com/login";

    this.NewUserSignup = page.locator("div[class='signup-form'] h2");
    //SignUp
    this.NameField = page.locator("input[placeholder='Name']");
    this.SignUpEmailField = page.locator("input[data-qa='signup-email']");
    this.SignUpButton = page.locator("button[data-qa='signup-button']");

    //Login
    this.LoginEmailField = page.locator("input[data-qa='login-email']");
    this.LoginPasswordField = page.locator("input[data-qa='login-password']");
    this.LoginButton = page.locator("button[data-qa='login-button']");
  }

  async goToLoginPage() {
    await this.page.goto(this.LoginPageUrl);
  }
  async verifyLoginPage() {
    const NewUserSignupLabel = await this.NewUserSignup.textContent();
    expect(NewUserSignupLabel).toBe("New User Signup!");
    expect(this.NewUserSignup).toBeVisible();
    console.log("New User Signup Label : " + NewUserSignupLabel);

    // await expect(this.page).toHaveURL(this.LoginPageUrl);
  }
  async registerUser(name, email) {
    await this.NameField.type(name);
    await this.SignUpEmailField.type(email);
    await this.SignUpButton.click();
  }

  async loginUser(loginEmail, loginPassword) {
    await this.LoginEmailField.type(loginEmail);
    await this.LoginPasswordField.type(loginPassword);
    await this.LoginButton.click();
  }
}
export default LoginPage;

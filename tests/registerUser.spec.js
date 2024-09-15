const { test, expect } = require("@playwright/test");
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/*
Test Case 1: Register User
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Click on 'Signup / Login' button  
5. Verify 'New User Signup!' is visible  
6. Enter name and email address  
7. Click 'Signup' button  
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible  
9. Fill details: Title, Name, Email, Password, Date of birth  
10. Select checkbox 'Sign up for our newsletter!'  
11. Select checkbox 'Receive special offers from our partners!'  
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number  
13. Click 'Create Account' button  
14. Verify that 'ACCOUNT CREATED!' is visible  
15. Click 'Continue' button  
16. Verify that 'Logged in as username' is visible  
17. Click 'Delete Account' button  
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button  
*/

test("Register User", async ({ page }) => {
  // Initializing Page Object Manager
  const POManager = new pageObjectManager(page);
  const homePage = POManager.getHomePage();
  const loginPage = POManager.getLoginPage();
  const accountInformationPage = POManager.getAccountInformationPage();
  const accountDeletedPage = POManager.getAccountDeletedPage();
  const accountCreatedPage = POManager.getAccountCreatedPage();

  const signupName = testData.registerUser.name;
  const signupEmail = testData.registerUser.email.replace(
    "<<increment>>",
    Math.floor(Math.random() * 1000)
  );
  console.log("Email : " + signupEmail);
  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.ClickloginButton();

  await loginPage.verifyLoginPage();
  await loginPage.registerUser(signupName, signupEmail);

  await accountInformationPage.verifyAccountInformationPage();
  await accountInformationPage.FillDataAndCreateAccount();

  //wait for network ideal



  await accountCreatedPage.verifyAccountCreatedPage();
  await accountCreatedPage.clickContinueButtonOnAccountCreatedPage();

  await homePage.verifyLoggedInAsButton(testData.registerUser.name);
  await homePage.clickAccountDeleteButton();

  await accountDeletedPage.verifyAccountDeletedPage();
  await accountDeletedPage.clickContinueButtonOnAccountDeletedPage();
});

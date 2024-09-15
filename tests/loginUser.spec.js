const { test, expect } = require("@playwright/test");
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));
/*
Test Case 2: Login User with Correct Email and Password
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Click on 'Signup / Login' button  
5. Verify 'Login to your account' is visible  
6. Enter correct email address and password  
7. Click 'login' button  
8. Verify that 'Logged in as username' is visible  
9. Click 'Delete Account' button  
10. Verify that 'ACCOUNT DELETED!' is visible  
*/

test("Login User with Correct Email and Password", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  console.log(
    "Executing - Test Case 2: Login User with Correct Email and Password"
  );

  console.log(
    "Executing - Test Case 24: Download Invoice after Purchase Order"
  );

  const POManager = new pageObjectManager(page);
  const homePage = POManager.getHomePage();
  const loginPage = POManager.getLoginPage();
  const accountDeletedPage = POManager.getAccountDeletedPage();
  const accountCreatedPage = POManager.getAccountCreatedPage();

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.ClickloginButton();

  await loginPage.verifyLoginPage();
  await loginPage.loginUser(
    testData.loginUser.email,
    testData.loginUser.password
  );
  await homePage.verifyLoggedInAsButton(testData.loginUser.name);
  await homePage.verifyAccountDeleteButtonIsVisible();
});

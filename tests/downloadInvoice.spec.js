const { test, expect } = require("@playwright/test");
import LoginPage from "../pages/loginPage";
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));
import dataManipulator from "../utils/dataManipulator";
import accountInformationPage from "../pages/accountInformationPage";
import checkoutPage from "../pages/checkoutPage";
import paymentPage from "../pages/paymentPage";
import AccountDeletedPage from "../pages/accountDeletedPage";

/*
Test Case 24: Download Invoice after Purchase Order
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Add products to the cart  
5. Click 'Cart' button  
6. Verify that the cart page is displayed  
7. Click 'Proceed To Checkout'  
8. Click 'Register / Login' button  
9. Fill in all details in Signup and create an account  
10. Verify 'ACCOUNT CREATED!' and click 'Continue' button  
11. Verify 'Logged in as username' at the top  
12. Click 'Cart' button  
13. Click 'Proceed To Checkout' button  
14. Verify Address Details and Review Your Order  
15. Enter a description in the comment text area and click 'Place Order'  
16. Enter payment details: Name on Card, Card Number, CVC, Expiration date  
17. Click 'Pay and Confirm Order' button  
18. Verify success message 'Your order has been placed successfully!'  
19. Click 'Download Invoice' button and verify the invoice is downloaded successfully  
20. Click 'Continue' button  
21. Click 'Delete Account' button  
22. Verify 'ACCOUNT DELETED!' and click 'Continue' button  

*/

test("Download Invoice after Purchase Order", async ({ page }) => {
  console.log(
    "Executing - Test Case 24: Download Invoice after Purchase Order"
  );

  const POManager = new pageObjectManager(page);
  const DataManipulator = new dataManipulator();
  const homePage = POManager.getHomePage();
  const productPage = POManager.getProductPage();
  const cartPage = POManager.getCartPage();
  const loginPage = POManager.getLoginPage();
  const accountInformationPage = POManager.getAccountInformationPage();
  const accountCreatedPage = POManager.getAccountCreatedPage();
  const checkoutPage = POManager.getCheckoutPage();
  const paymentPage = POManager.getPaymentPage();
  const accountDeletedPage = POManager.getAccountDeletedPage();

  await homePage.goToHomePage();

  const email = DataManipulator.randomEmail();

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.clickProductButton();

  await productPage.verifyProductPage();
  await productPage.hoverOverTheProductToAddToCart(0);
  await productPage.clickModelContinueShoppingButton();

  await productPage.hoverOverTheProductToAddToCart(1);
  await productPage.clickModelPopupAddToCartButton();

  await cartPage.clickCheckoutButton();
  await cartPage.clickRegisterHyperlink();

  await loginPage.verifyLoginPage();
  await loginPage.registerUser(testData.registerUser.name, email);

  await accountInformationPage.verifyAccountInformationPage();
  await accountInformationPage.FillDataAndCreateAccount();

  await accountCreatedPage.verifyAccountCreatedPage();
  await accountCreatedPage.clickContinueButtonOnAccountCreatedPage();

  await homePage.verifyLoggedInAsButton(testData.registerUser.name);
  await homePage.clickCartButton();

  await cartPage.clickCheckoutButton();

  await checkoutPage.fillMessage(testData.checkoutPage.OrderMessage);
  await checkoutPage.clickPlaceOrderButton();

  await paymentPage.paymentDetails(
    testData.paymentPage.NameOnCard,
    testData.paymentPage.CardNumber,
    testData.paymentPage.ExpiryMonth,
    testData.paymentPage.ExpiryYear,
    testData.paymentPage.CVC
  );

  await paymentPage.verifyPaymentSuccessMessage();

  await paymentPage.clickDownloadInvoiceButton();
  await paymentPage.verifyWhetherInvoiceDownloaded();
  await paymentPage.clickContinueButton();

  await homePage.clickAccountDeleteButton();
  await accountDeletedPage.verifyAccountDeletedPage();
  await accountDeletedPage.clickContinueButton();
});

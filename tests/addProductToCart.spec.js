const { test, expect } = require("@playwright/test");
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/*
Test Case 12: Add Products in Cart
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Click 'Products' button  
5. Hover over the first product and click 'Add to cart'  
6. Click 'Continue Shopping' button  
7. Hover over the second product and click 'Add to cart'  
8. Click 'View Cart' button  
9. Verify both products are added to the cart  
10. Verify their prices, quantity, and total price  
*/
test("Add Products in Cart", async ({ page }) => {
  // Initializing Page Object Manager
  const POManager = new pageObjectManager(page);
  const homePage = POManager.getHomePage();
  const productPage = POManager.getProductPage();
  const cartPage = POManager.getCartPage();

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.clickProductButton();

  await productPage.verifyProductPage();
  await productPage.hoverOverTheProductToAddToCart(0);
  await productPage.clickModelContinueShoppingButton();

  await productPage.hoverOverTheProductToAddToCart(1);
  await productPage.clickModelPopupAddToCartButton();

  await cartPage.verifyProductPriceQuantityAndTotalPrice();
});

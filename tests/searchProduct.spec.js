const { test, expect } = require("@playwright/test");
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/*
Test Case 9: Search Product
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Click on 'Products' button  
5. Verify the user is navigated to ALL PRODUCTS page successfully  
6. Enter product name in the search input and click search button  
7. Verify 'SEARCHED PRODUCTS' is visible  
8. Verify all the products related to the search are visible 
*/

test("Test Case 9: Search Product", async ({ page }) => {
  // Initializing Page Object Manager
  const POManager = new pageObjectManager(page);
  const homePage = POManager.getHomePage();
  const productPage = POManager.getProductPage();

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.clickProductButton();

  await productPage.verifyProductPage();
  await productPage.searchProduct(testData.searchProduct);
  await productPage.verifySearchedProductTitleIsVisible();
  await productPage.verifySearchedProductCardIsVisible();
});

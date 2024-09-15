const { test, expect } = require("@playwright/test");
import { promises } from "dns";
import dataManipulator from "../utils/dataManipulator";
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/*
Test Case 11: Verify Subscription in Cart Page
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Click 'Cart' button  
5. Scroll down to footer  
6. Verify text 'SUBSCRIPTION'  
7. Enter email address in input and click the arrow button  
8. Verify success message 'You have been successfully subscribed!' is visible  
*/
test("Verify Subscription in Cart Page", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  console.log("Executing -- Test Case 11: Verify Subscription in Cart Page");

  const POManager = new pageObjectManager(page);
  const homePage = POManager.getHomePage();
  const cartPage = POManager.getCartPage();

  const DataManipulator = new dataManipulator();

  await homePage.goToHomePage();
  await homePage.verifyHomePage();
  await homePage.clickCartButton();
  await cartPage.verifySubscriptionLabel();

  // Using Promise.all correctly
  const email = DataManipulator.randomEmail(); // Generate email

  await Promise.all([
    cartPage.submitEmailInSubscription(DataManipulator.randomEmail()),
    cartPage.verifySubscriptionSuccessMessage(),
  ]);
});

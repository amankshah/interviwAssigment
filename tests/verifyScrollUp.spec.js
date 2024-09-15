const { test, expect } = require("@playwright/test");
import pageObjectManager from "../utils/pageObjectManager";
const testData = JSON.parse(JSON.stringify(require("../utils/testData.json")));

/*
Test Case 25: Verify Scroll Up using 'Arrow' Button and Scroll Down Functionality
1. Launch browser  
2. Navigate to the URL 'http://automationexercise.com'  
3. Verify that the home page is visible successfully  
4. Scroll down to the bottom of the page  
5. Verify 'SUBSCRIPTION' is visible  
6. Click on the arrow at the bottom right side to move upward  
7. Verify that the page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
*/

test("Verify Scroll Up using 'Arrow' Button and Scroll Down Functionality", async ({
  page,
}) => {
  console.log(
    'Executing -- Test Case 25: Verify Scroll Up using "Arrow" Button and Scroll Down Functionality'
  );

  // Initializing Page Object Manager
  const POManager = new pageObjectManager(page);
  const homePage = POManager.getHomePage();

  await homePage.goToHomePage();
  await homePage.verifyHomePage();

  await homePage.scrollToBottom();
  await homePage.verifySubscriptionLabel();

  await homePage.scrollToFullFledgedText();
  await homePage.verifyFullFledgedTextIsVisible();
  /*As user is not able to see any kind of arrow button in the bottom right side to scroll  
    to up i have used scroll up function .

    */
});

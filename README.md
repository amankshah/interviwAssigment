# Playwright Automation for [AutomationExercise](https://automationexercise.com/test_cases)

This project automates several test cases from AutomationExercise using Playwright with JavaScript. The tests are written following the **Page Object Model (POM)** pattern to promote maintainability and reuse of code.

## Test Cases Automated


### [Test Case 1: Register User](https://automationexercise.com/test_cases#collapse1)

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

### [Test Case 2: Login User with Correct Email and Password](https://automationexercise.com/test_cases#collapse2)

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

### [Test Case 9: Search Product](https://automationexercise.com/test_cases#collapse9)

    1. Launch browser  
    2. Navigate to the URL 'http://automationexercise.com'  
    3. Verify that the home page is visible successfully  
    4. Click on 'Products' button  
    5. Verify the user is navigated to ALL PRODUCTS page successfully  
    6. Enter product name in the search input and click search button  
    7. Verify 'SEARCHED PRODUCTS' is visible  
    8. Verify all the products related to the search are visible  

### [Test Case 11: Verify Subscription in Cart Page](https://automationexercise.com/test_cases#collapse11)

    1. Launch browser  
    2. Navigate to the URL 'http://automationexercise.com'  
    3. Verify that the home page is visible successfully  
    4. Click 'Cart' button  
    5. Scroll down to footer  
    6. Verify text 'SUBSCRIPTION'  
    7. Enter email address in input and click the arrow button  
    8. Verify success message 'You have been successfully subscribed!' is visible  

### [Test Case 12: Add Products in Cart](https://automationexercise.com/test_cases#collapse12)

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

### [Test Case 24: Download Invoice after Purchase Order](https://automationexercise.com/test_cases#collapse24)

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

### [Test Case 25: Verify Scroll Up using 'Arrow' Button and Scroll Down Functionality](https://automationexercise.com/test_cases#collapse25)

    1. Launch browser  
    2. Navigate to the URL 'http://automationexercise.com'  
    3. Verify that the home page is visible successfully  
    4. Scroll down to the bottom of the page  
    5. Verify 'SUBSCRIPTION' is visible  
    6. Click on the arrow at the bottom right side to move upward  
    7. Verify that the page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen  

---

## Project Structure

The project is structured using the Page Object Model (POM) for better readability and maintainability of test cases.

```bash
.
├── tests/
│   ├── registerUser.spec.js
│   ├── loginUser.spec.js
│   ├── searchProduct.spec.js
│   ├── verifySubscription.spec.js
│   ├── addProductToCart.spec.js
│   ├── downloadInvoice.spec.js
│   └── verifyScrollUp.spec.js
├── pages/
│   ├── homePage.js
│   ├── loginPage.js
│   ├── cartPage.js
│   ├── productPage.js
│   └── checkoutPage.js
├── playwright.config.js
└── README.md

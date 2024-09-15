# Playwright Automation for [AutomationExercise](https://automationexercise.com/test_cases)

This project automates several test cases from AutomationExercise using Playwright with JavaScript. The tests are written following the **Page Object Model (POM)** pattern to promote maintainability and reuse of code.

## Test Cases Automated

The following test cases have been automated:

1. **Register User**  
   Automates the process of registering a new user.

2. **Login User with Correct Email and Password**  
   Validates login functionality using correct credentials.

3. **Search Product**  
   Automates product search functionality and verifies search results.

4. **Verify Subscription in Cart Page**  
   Ensures that subscription functionality is present and works correctly in the cart page.

5. **Add Products to Cart**  
   Adds products to the shopping cart and verifies successful addition.

6. **Download Invoice After Purchase Order**  
   Automates the process of purchasing a product and downloading the invoice.

7. **Verify Scroll Up Using 'Arrow' Button and Scroll Down Functionality**  
   Ensures that the scroll functionality works correctly with both 'arrow' button for scrolling up and general scroll-down.

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

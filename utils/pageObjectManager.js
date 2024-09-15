import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import checkoutPage from "../pages/checkoutPage";
import cartPage from "../pages/cartPage";
import productPage from "../pages/productPage";
import accountInformationPage from "../pages/accountInformationPage";
import accountDeletedPage from "../pages/accountDeletedPage";
import accountCreatedPage from "../pages/accountCreatedPage";

class pageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new loginPage(this.page);
    this.homePage = new homePage(this.page);
    this.checkoutPage = new checkoutPage(this.page);
    this.cartPage = new cartPage(this.page);
    this.productPage = new productPage(this.page);
    this.accountInformationPage = new accountInformationPage(this.page);
    this.accountDeletedPage = new accountDeletedPage(this.page);
    this.accountCreatedPage = new accountCreatedPage(this.page);
  }

  getHomePage() {
    return this.homePage;
  }

  getLoginPage() {
    return this.loginPage;
  }

  getCheckoutPage() {
    return this.checkoutPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getProductPage() {
    return this.productPage;
  }

  getAccountInformationPage() {
    return this.accountInformationPage;
  }

  getAccountDeletedPage() {
    return this.accountDeletedPage;
  }

  getAccountCreatedPage() {
    return this.accountCreatedPage;
  }
}

export default pageObjectManager;

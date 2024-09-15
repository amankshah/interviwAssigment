import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import checkoutPage from "../pages/checkoutPage";
import cartPage from "../pages/cartPage";
import productPage from "../pages/productPage";

class pageObjectManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new loginPage(this.page);
    this.homePage = new homePage(this.page);
    this.checkoutPage = new checkoutPage(this.page);
    this.cartPage = new cartPage(this.page);
    this.productPage = new productPage(this.page);
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
}

export default pageObjectManager;

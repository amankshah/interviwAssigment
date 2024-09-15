const { test, expect } = require("@playwright/test");
class productPage {
  constructor(page) {
    this.page = page;
    this.productPageUrl = "https://automationexercise.com/products";
    this.allProductTextLabel = page.locator(".title");
    this.searchBarInputFilled = page.locator("#search_product");
    this.searchButton = page.locator("#submit_search");
    this.searchedProductPageLabel = page.locator(".title");
    this.searchedProductCard = page.locator(".productinfo");
  }

  async goToProductPage() {
    await this.page.goto(this.productPageUrl);
  }

  async verifyProductPage() {
    await expect(this.allProductTextLabel).toBeVisible();
    await expect(this.allProductTextLabel).toHaveText("All Products");
  }

  async searchProduct(productName) {
    console.log("Searching for " + productName);

    await this.searchBarInputFilled.fill(productName);
    await this.searchButton.click();
  }
  async verifySearchedProductTitleIsVisible() {
    await expect(this.searchedProductPageLabel).toBeVisible();
    await expect(this.searchedProductPageLabel).toHaveText("Searched Products");
  }

  async verifySearchedProductCardIsVisible() {
    await expect(this.searchedProductCard.first()).toBeVisible();
    const resultCount = await this.searchedProductCard.count();
    console.log("Total Displayed Product :" + resultCount);
  }
}
export default productPage;

import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
  }

  async getItemNames(): Promise<string[]> {
    return this.page
      .locator('[data-test="inventory-item-name"]')
      .allTextContents();
  }

  async removeItemByName(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]', {
      has: this.page.locator(`text=${productName}`),
    });
    await item.locator('button', { hasText: 'Remove' }).click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }
}

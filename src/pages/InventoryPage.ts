import { type Page, type Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly sortDropdown: Locator;
  readonly cartBadge: Locator;
  readonly cartLink: Locator;
  readonly burgerMenuButton: Locator;
  readonly logoutLink: Locator;
  readonly resetAppStateLink: Locator;
  readonly closeBurgerMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('[data-test="inventory-item"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.burgerMenuButton = page.getByRole('button', { name: 'Open Menu' });
    this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    this.resetAppStateLink = page.locator('[data-test="reset-sidebar-link"]');
    this.closeBurgerMenu = page.locator('[data-test="close-menu"]');
  }

  async addToCartByName(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]', {
      has: this.page.locator(`text=${productName}`),
    });
    await item.locator('button', { hasText: 'Add to cart' }).click();
  }

  async removeFromCartByName(productName: string) {
    const item = this.page.locator('[data-test="inventory-item"]', {
      has: this.page.locator(`text=${productName}`),
    });
    await item.locator('button', { hasText: 'Remove' }).click();
  }

  async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  async getItemNames(): Promise<string[]> {
    return this.page
      .locator('[data-test="inventory-item-name"]')
      .allTextContents();
  }

  async getItemPrices(): Promise<number[]> {
    const priceTexts = await this.page
      .locator('[data-test="inventory-item-price"]')
      .allTextContents();
    return priceTexts.map((p) => parseFloat(p.replace('$', '')));
  }

  async getCartCount(): Promise<number> {
    const badge = this.cartBadge;
    if (await badge.isVisible()) {
      const text = await badge.textContent();
      return parseInt(text || '0');
    }
    return 0;
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.burgerMenuButton.click();
    await this.logoutLink.click();
  }
}

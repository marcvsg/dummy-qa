import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { USERS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 05 — CRUD no Carrinho
 * ============================================================
 *
 * Conceitos praticados:
 * - Operações Create, Read, Delete
 * - Navegação entre páginas (inventário ↔ carrinho)
 * - Validação de listas (toContain, toHaveLength)
 * - Uso de múltiplos Page Objects juntos
 *
 * Fluxo: Inventário → adicionar → Cart → verificar/remover
 *
 * Page Objects envolvidos:
 * - InventoryPage: addToCartByName(), goToCart()
 * - CartPage: getItemNames(), removeItemByName(), proceedToCheckout()
 * ============================================================
 */

test.describe('CRUD — Carrinho de Compras', () => {
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    inventoryPage = new InventoryPage(page);
    cartPage = new CartPage(page);
  });

  // ✅ EXEMPLO RESOLVIDO
  test('CREATE — deve adicionar item ao carrinho e verificar no cart', async () => {
    await inventoryPage.addToCartByName('Sauce Labs Backpack');
    await inventoryPage.goToCart();

    const items = await cartPage.getItemNames();
    expect(items).toContain('Sauce Labs Backpack');
  });

  test('READ — deve exibir os itens corretos no carrinho', async () => {
    // TODO: Adicione 2 produtos diferentes no inventário
    // TODO: Vá ao carrinho
    // TODO: Pegue os nomes dos itens com cartPage.getItemNames()
    // TODO: Verifique que a lista tem length 2
    // TODO: Verifique que contém os dois nomes corretos
  });

  test('DELETE — deve remover item do carrinho', async () => {
    // TODO: Adicione 2 produtos, vá ao carrinho
    // TODO: Remova 1 com cartPage.removeItemByName()
    // TODO: Verifique que sobrou 1 item
    // TODO: Verifique que o item removido NÃO está mais na lista
    // Dica: expect(items).not.toContain('nome do produto')
  });

  test('DELETE ALL — deve esvaziar o carrinho', async () => {
    // TODO: Adicione 2 produtos, vá ao carrinho
    // TODO: Remova ambos
    // TODO: Verifique que cartPage.cartItems tem count 0
    // Dica: expect(cartPage.cartItems).toHaveCount(0)
  });

  test('deve voltar ao inventário via Continue Shopping', async ({ page }) => {
    // TODO: Vá ao carrinho
    // TODO: Clique em Continue Shopping
    // TODO: Verifique que a URL é do inventário
  });
});

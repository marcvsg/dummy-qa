import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { USERS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 02 — Inventário (Testes Funcionais)
 * ============================================================
 *
 * Conceitos praticados:
 * - Contagem de elementos (toHaveCount)
 * - Interação com dropdowns (selectOption)
 * - Validação de ordenação de arrays
 * - Uso de dois Page Objects em conjunto
 *
 * Consulte src/pages/InventoryPage.ts pra ver os métodos:
 * - addToCartByName(), removeFromCartByName()
 * - sortBy(), getItemNames(), getItemPrices()
 * - getCartCount(), goToCart()
 * ============================================================
 */

test.describe('Inventário — Functional Tests', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    // Login é pré-condição — já resolvido pra você
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    inventoryPage = new InventoryPage(page);
    await expect(inventoryPage.title).toHaveText('Products');
  });

  // ✅ EXEMPLO RESOLVIDO
  test('deve exibir 6 produtos no catálogo', async () => {
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test('deve adicionar produto ao carrinho', async () => {
    // TODO: Use inventoryPage.addToCartByName('Sauce Labs Backpack')
    // TODO: Verifique que getCartCount() retorna 1
    // Dica: expect(await inventoryPage.getCartCount()).toBe(1)
  });

  test('deve remover produto do carrinho pela página de inventário', async () => {
    // TODO: Adicione um produto
    // TODO: Verifique que o carrinho tem 1 item
    // TODO: Remova o mesmo produto com removeFromCartByName()
    // TODO: Verifique que o carrinho voltou a 0
  });

  test('deve adicionar múltiplos produtos ao carrinho', async () => {
    // TODO: Adicione 3 produtos diferentes
    // TODO: Verifique que o badge mostra 3
    // Dica: os nomes dos produtos são:
    //   'Sauce Labs Backpack'
    //   'Sauce Labs Bike Light'
    //   'Sauce Labs Bolt T-Shirt'
  });

  test('deve ordenar produtos por nome A-Z', async () => {
    // TODO: Use inventoryPage.sortBy('az')
    // TODO: Pegue os nomes com getItemNames()
    // TODO: Crie uma cópia ordenada e compare com o original
    // Dica:
    //   const names = await inventoryPage.getItemNames();
    //   const sorted = [...names].sort();
    //   expect(names).toEqual(sorted);
  });

  test('deve ordenar produtos por nome Z-A', async () => {
    // TODO: Mesmo padrão do A-Z, mas com sortBy('za')
    // TODO: A cópia deve ser .sort().reverse()
  });

  test('deve ordenar produtos por preço menor para maior', async () => {
    // TODO: Use sortBy('lohi') e getItemPrices()
    // TODO: Compare com cópia ordenada numericamente
    // Dica: .sort((a, b) => a - b) pra ordenar números
  });

  test('deve ordenar produtos por preço maior para menor', async () => {
    // TODO: Mesmo padrão, com sortBy('hilo')
    // Dica: .sort((a, b) => b - a)
  });
});

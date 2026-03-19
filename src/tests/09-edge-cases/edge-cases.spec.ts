import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { USERS, CHECKOUT_INFO } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 10 — Edge Cases (Cenários Limítrofes)
 * ============================================================
 *
 * Conceitos praticados:
 * - Pensar em cenários que o dev não previu
 * - Testar limites (1 item, todos os itens)
 * - Testar usuários com comportamento bugado
 * - Validar persistência de estado entre páginas
 *
 * Edge cases são o que separa um QA júnior de um QA pleno.
 * A habilidade de pensar "e se o usuário fizer isso?" é crucial.
 * ============================================================
 */

test.describe('Edge Cases — Cenários Limítrofes', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // ✅ EXEMPLO RESOLVIDO
  test('problem_user deve exibir comportamento inesperado', async ({
    page,
  }) => {
    await loginPage.login(USERS.problem.username, USERS.problem.password);
    const inventoryPage = new InventoryPage(page);

    // Problem user consegue logar, mas tem bugs visuais
    await expect(inventoryPage.title).toHaveText('Products');
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test('deve manter itens no carrinho após navegar entre páginas', async ({
    page,
  }) => {
    // TODO: Login → Adicionar item → Ir ao cart → Continue Shopping
    // TODO: Verifique que o badge do carrinho AINDA mostra 1
    //
    // Esse teste valida que o estado persiste na navegação!
  });

  test('deve permitir checkout com apenas 1 item', async ({ page }) => {
    // TODO: Login → Adicione apenas 1 item (ex: 'Sauce Labs Onesie')
    // TODO: Complete o fluxo inteiro até "Thank you for your order!"
    //
    // Pergunta: Por que testar com 1 item se já testamos com 2?
    // Resposta: Alguns bugs só aparecem nos extremos!
  });

  test('deve permitir checkout com todos os 6 itens', async ({ page }) => {
    // TODO: Login → Adicione TODOS os 6 produtos
    // TODO: Verifique que o badge mostra 6
    // TODO: Complete o checkout inteiro
    //
    // Lista de todos os produtos:
    //   'Sauce Labs Backpack'
    //   'Sauce Labs Bike Light'
    //   'Sauce Labs Bolt T-Shirt'
    //   'Sauce Labs Fleece Jacket'
    //   'Sauce Labs Onesie'
    //   'Test.allTheThings() T-Shirt (Red)'
    //
    // Dica: use um array + for...of pra adicionar todos
  });

  test('deve lidar com login usando espaços no username', async () => {
    // TODO: Tente fazer login com '  standard_user  ' (espaços extras)
    // TODO: O que acontece? O site trata os espaços?
    // TODO: Verifique o resultado (erro ou sucesso?)
    //
    // Esse é um edge case clássico de formulários!
  });

  /**
   * 🏆 DESAFIO BÔNUS — Crie seus próprios edge cases!
   *
   * Ideias pra você explorar:
   * - O que acontece se adicionar e remover o mesmo item várias vezes?
   * - E se clicar em "Finish" duas vezes rápido?
   * - O error_user tem comportamento diferente do standard?
   * - O visual_user tem diferenças no layout?
   *
   * Crie novos test() blocks aqui embaixo com seus cenários!
   */
});

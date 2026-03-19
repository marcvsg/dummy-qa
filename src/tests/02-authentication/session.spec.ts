import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { USERS, URLS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 03 — Autenticação (Sessão e Acesso)
 * ============================================================
 *
 * Conceitos praticados:
 * - Proteção de rotas (acessar páginas sem login)
 * - Logout e invalidação de sessão
 * - Testes de segurança básica
 *
 * Conceito-chave: O SauceDemo bloqueia acesso direto a páginas
 * protegidas se o usuário não está logado. Você vai testar isso.
 *
 * URLs disponíveis em URLS: .inventory, .cart, .checkoutStepOne
 * ============================================================
 */

test.describe('Autenticação — Session & Access Control', () => {
  // ✅ EXEMPLO RESOLVIDO
  test('deve redirecionar para login ao acessar inventário sem autenticação', async ({
    page,
  }) => {
    await page.goto(URLS.inventory);
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText(
      "You can only access '/inventory.html' when you are logged in"
    );
  });

  test('deve redirecionar para login ao acessar carrinho sem autenticação', async ({
    page,
  }) => {
    // TODO: Navegue direto para URLS.cart sem fazer login
    // TODO: Verifique que a mensagem de erro aparece
    // TODO: O texto deve conter "when you are logged in"
  });

  test('deve redirecionar para login ao acessar checkout sem autenticação', async ({
    page,
  }) => {
    // TODO: Navegue direto para URLS.checkoutStepOne
    // TODO: Verifique a mensagem de erro
  });

  test('deve fazer logout e retornar à página de login', async ({ page }) => {
    // TODO: Faça login com standard_user
    // TODO: Use inventoryPage.logout()
    // TODO: Verifique que voltou pra URL do login
    // TODO: Verifique que o botão de login está visível
    // Dica: o logout abre o menu hamburguer e clica em "Logout"
  });

  test('não deve acessar inventário após logout', async ({ page }) => {
    // TODO: Faça login → logout → tente acessar URLS.inventory
    // TODO: Verifique que o erro de "not logged in" aparece
    // Este teste valida que a sessão foi realmente destruída!
  });
});

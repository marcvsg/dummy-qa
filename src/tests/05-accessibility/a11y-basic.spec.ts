import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USERS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 06 — Acessibilidade
 * ============================================================
 *
 * Conceitos praticados:
 * - Verificar atributos HTML (placeholder, value, role)
 * - Validar que elementos são acessíveis por teclado
 * - Verificar estrutura semântica
 *
 * Por que isso importa?
 * Acessibilidade garante que pessoas com deficiência consigam
 * usar a aplicação. É uma skill valorizada no mercado de QA.
 *
 * Dica avançada: Depois de completar, pesquise sobre
 * @axe-core/playwright pra testes de a11y automatizados.
 * ============================================================
 */

test.describe('Acessibilidade — Testes Básicos', () => {
  // ✅ EXEMPLO RESOLVIDO
  test('página de login deve ter roles e labels corretos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await expect(loginPage.usernameInput).toHaveAttribute(
      'placeholder',
      'Username'
    );
    await expect(loginPage.passwordInput).toHaveAttribute(
      'placeholder',
      'Password'
    );
    await expect(loginPage.loginButton).toHaveAttribute('value', 'Login');
  });

  test('página de inventário deve ter estrutura semântica', async ({
    page,
  }) => {
    // TODO: Faça login
    // TODO: Verifique que o título "Products" está visível
    // TODO: Pra CADA item do inventário, verifique que:
    //       - O nome do item ([data-test="inventory-item-name"]) está visível
    //       - O preço ([data-test="inventory-item-price"]) está visível
    //
    // Dica pra fazer loop:
    //   const items = page.locator('[data-test="inventory-item"]');
    //   const count = await items.count();
    //   for (let i = 0; i < count; i++) {
    //     const item = items.nth(i);
    //     // suas verificações aqui
    //   }
  });

  test('elementos interativos devem ser focáveis via teclado', async ({
    page,
  }) => {
    // TODO: Vá pra página de login
    // TODO: Pressione Tab com page.keyboard.press('Tab')
    // TODO: Verifique que o elemento focado é um INPUT
    //
    // Dica pra pegar o elemento ativo:
    //   const tag = await page.evaluate(() => document.activeElement?.tagName);
    //   expect(tag).toBe('INPUT');
  });

  test('mensagem de erro deve ser acessível', async ({ page }) => {
    // TODO: Provoque um erro de login
    // TODO: Verifique que a mensagem de erro está visível
    // TODO: Verifique que o texto tem conteúdo (length > 0)
    //
    // Pense: um leitor de tela conseguiria ler essa mensagem?
  });
});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USERS, URLS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 01 — Login (Testes Funcionais)
 * ============================================================
 *
 * Conceitos praticados:
 * - Navegação e interação com formulários
 * - Assertions de visibilidade, texto e URL
 * - Uso de Page Objects (LoginPage)
 *
 * Dica: Abra https://www.saucedemo.com/ no browser e inspecione
 * os elementos com DevTools pra entender os seletores.
 *
 * Consulte src/pages/LoginPage.ts pra ver os locators e métodos.
 * ============================================================
 */

test.describe('Login — Functional Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // ✅ EXEMPLO RESOLVIDO — Use como referência pros próximos
  test('deve exibir a página de login corretamente', async () => {
    await expect(loginPage.logo).toBeVisible();
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('deve fazer login com credenciais válidas', async ({ page }) => {
    await expect(loginPage.login).toBeDefined();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await expect(page).toHaveURL(/inventory/);
    // TODO: Use loginPage.login() com as credenciais do USERS.standard
    // TODO: Verifique que a URL mudou para a página de inventário
    // Dica: use expect(page).toHaveURL() com regex — ex: /inventory/
  });

  test('deve exibir erro para usuário bloqueado', async () => {
    await loginPage.login(USERS.lockedOut.username, USERS.lockedOut.password);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('locked out');
    // TODO: Faça login com USERS.lockedOut
    // TODO: Verifique que a mensagem de erro está visível
    // TODO: Verifique que o texto contém "locked out"
    // Dica: use expect(locator).toContainText()
  });

  test('deve exibir erro para senha incorreta', async () => {
    await loginPage.login(USERS.standard.username, USERS.standard.password + 'invalid');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username and password do not match');
    // TODO: Faça login com standard_user mas senha errada
    // TODO: Verifique a mensagem de erro
    // Dica: o texto esperado é "Username and password do not match"
  });

  test('deve exibir erro para campos vazios', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Username is required');
    // TODO: Faça login com username e senha vazios ('')
    // TODO: Verifique que o erro diz "Username is required"
  });

  test('deve exibir erro para senha vazia', async () => {
    await loginPage.login(USERS.standard.username, '');
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText('Password is required');
    // TODO: Preencha só o username, deixe senha vazia
    // TODO: Qual mensagem de erro aparece? Verifique!
  });

  test('deve fechar a mensagem de erro ao clicar no X', async () => {
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
    await loginPage.dismissError();
    await expect(loginPage.errorMessage).not.toBeVisible();
    await expect(loginPage.errorCloseButton).not.toBeVisible();
    
    // TODO: Provoque um erro (login com campos vazios)
    // TODO: Verifique que o erro está visível
    // TODO: Use loginPage.dismissError() pra fechar
    // TODO: Verifique que o erro NÃO está mais visível
    // Dica: use expect(locator).not.toBeVisible()
  });
});

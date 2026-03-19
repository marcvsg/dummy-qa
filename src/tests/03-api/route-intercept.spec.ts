import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USERS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 04 — API / Route Intercept (Nível Intermediário)
 * ============================================================
 *
 * Conceitos praticados:
 * - page.on('request') — escutar requests do browser
 * - page.route() — interceptar e modificar requests
 * - route.abort() — bloquear requests
 * - route.fulfill() — retornar resposta fake
 *
 * Esses conceitos são essenciais pra testar cenários como:
 * - "O que acontece se a API cair?"
 * - "O que acontece sem imagens?"
 * - "Como o app lida com erro 500?"
 * ============================================================
 */

test.describe('API — Route Intercept & Mock', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
  });

  // ✅ EXEMPLO RESOLVIDO — Interceptar requests de imagem
  test('deve interceptar e verificar carregamento de imagens dos produtos', async ({
    page,
  }) => {
    const imageRequests: string[] = [];

    page.on('request', (request) => {
      if (request.resourceType() === 'image') {
        imageRequests.push(request.url());
      }
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    expect(imageRequests.length).toBeGreaterThan(0);
  });

  test('deve bloquear imagens via route e verificar que não carregam', async ({
    page,
  }) => {
    // TODO: Use page.route() pra interceptar arquivos de imagem
    // TODO: Dentro do callback, use route.abort() pra bloquear
    // TODO: Recarregue a página com page.reload()
    // TODO: Verifique que as imagens têm naturalWidth === 0
    //
    // Dica de estrutura:
    //   await page.route('**/*.{png,jpg,jpeg,svg}', (route) => route.abort());
    //   await page.reload();
    //
    //   const images = page.locator('.inventory_item_img img');
    //   // Loop pelas imagens e verifique naturalWidth com .evaluate()
  });

  test('deve simular falha de rede (erro 500)', async ({ page }) => {
    // TODO: Use page.route() pra interceptar '/inventory.html'
    // TODO: Em vez de abort(), use route.fulfill() com status 500
    // TODO: Navegue pra página e verifique que o status é 500
    //
    // Dica:
    //   route.fulfill({ status: 500, body: 'Internal Server Error' })
    //
    // Pra pegar o status:
    //   const response = await page.goto('/inventory.html');
    //   expect(response?.status()).toBe(500);
  });
});

import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USERS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 07 — Visual Regression (Screenshot Comparison)
 * ============================================================
 *
 * Conceitos praticados:
 * - toHaveScreenshot() — compara screenshots entre execuções
 * - maxDiffPixelRatio — tolerância de diferença visual
 * - Baseline snapshots — imagens de referência
 *
 * Como funciona:
 * 1. Na PRIMEIRA execução, Playwright salva screenshots como baseline
 * 2. Nas próximas, compara o visual atual com o baseline
 * 3. Se a diferença passar do threshold, o teste falha
 *
 * Pra gerar o baseline inicial, rode:
 *   npx playwright test --update-snapshots
 * ============================================================
 */

test.describe('Visual — Screenshot Comparison', () => {
  // ✅ EXEMPLO RESOLVIDO
  test('página de login deve ter aparência consistente', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('login-page.png', {
      maxDiffPixelRatio: 0.05,
    });
  });

  test('página de inventário deve ter aparência consistente', async ({
    page,
  }) => {
    // TODO: Faça login
    // TODO: Espere o carregamento completo com waitForLoadState('networkidle')
    // TODO: Compare screenshot com toHaveScreenshot('inventory-page.png')
    // TODO: Use maxDiffPixelRatio: 0.05 (5% de tolerância)
  });

  test('estado de erro deve ter aparência consistente', async ({ page }) => {
    // TODO: Vá pra página de login
    // TODO: Provoque um erro (login com campos vazios)
    // TODO: Compare screenshot do estado de erro
    //
    // Pergunta pra pensar: Por que testar o estado de erro visualmente?
    // Resposta: Garante que a mensagem de erro não mudou de posição,
    // cor, ou tamanho entre versões.
  });
});

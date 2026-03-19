import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { USERS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 08 — Performance
 * ============================================================
 *
 * Conceitos praticados:
 * - Medir tempo de operações com Date.now()
 * - Performance API do browser (PerformanceNavigationTiming)
 * - page.evaluate() — executar JS no contexto do browser
 * - Thresholds — definir limites aceitáveis
 *
 * Por que testar performance?
 * Um app pode estar funcional mas ser tão lento que ninguém usa.
 * O SauceDemo tem o performance_glitch_user justamente pra isso.
 * ============================================================
 */

test.describe('Performance — Tempo de Resposta', () => {
  // ✅ EXEMPLO RESOLVIDO
  test('login deve completar em menos de 3 segundos', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const start = Date.now();
    await loginPage.login(USERS.standard.username, USERS.standard.password);
    await page.waitForURL(/inventory/);
    const elapsed = Date.now() - start;

    expect(elapsed).toBeLessThan(3000);
  });

  test('login com performance_glitch_user deve ser mais lento', async ({
    page,
  }) => {
    // TODO: Faça login com USERS.performanceGlitch
    // TODO: Meça o tempo como no exemplo acima
    // TODO: Verifique que o tempo é MAIOR que 500ms
    //       (ele é propositalmente lento)
    // TODO: Use console.log() pra imprimir o tempo
    //
    // Dica: expect(elapsed).toBeGreaterThan(500)
  });

  test('página de inventário deve carregar em tempo aceitável', async ({
    page,
  }) => {
    // TODO: Faça login, depois recarregue a página
    // TODO: Meça o tempo do reload até networkidle
    // TODO: Verifique que é menos de 5 segundos
    //
    // Dica:
    //   await page.reload();
    //   await page.waitForLoadState('networkidle');
  });

  test('deve medir Web Vitals básicos via Performance API', async ({
    page,
  }) => {
    // TODO: Faça login
    // TODO: Use page.evaluate() pra acessar a Performance API do browser
    // TODO: Extraia domContentLoaded, loadComplete, domInteractive
    // TODO: Verifique que estão dentro dos limites
    //
    // Dica — o evaluate retorna dados do browser pro Playwright:
    //
    //   const metrics = await page.evaluate(() => {
    //     const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    //     return {
    //       domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime,
    //       loadComplete: nav.loadEventEnd - nav.startTime,
    //       domInteractive: nav.domInteractive - nav.startTime,
    //     };
    //   });
    //
    //   console.log('Web Vitals:', metrics);
    //   expect(metrics.domContentLoaded).toBeLessThan(5000);
  });
});

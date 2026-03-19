import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { USERS, CHECKOUT_INFO, URLS } from '../../fixtures/test-data';

/**
 * ============================================================
 * 📚 EXERCÍCIO 09 — E2E Journey (Jornada Completa)
 * ============================================================
 *
 * Conceitos praticados:
 * - Teste end-to-end cobrindo múltiplas páginas
 * - Uso de TODOS os Page Objects em sequência
 * - Validação de fluxo completo de negócio
 *
 * Este é o BOSS FINAL dos exercícios! Aqui você junta tudo
 * que praticou nas categorias anteriores.
 *
 * Fluxo: Login → Inventário → Carrinho → Checkout → Confirmação
 *
 * Page Objects: LoginPage → InventoryPage → CartPage → CheckoutPage
 * ============================================================
 */

test.describe('E2E — Jornada Completa do Usuário', () => {
  test('fluxo completo: login → produtos → checkout → confirmação', async ({
    page,
  }) => {
    // ---- ETAPA 1: LOGIN ----
    // TODO: Crie LoginPage, vá pra página, faça login
    // TODO: Verifique que chegou no inventário

    // ---- ETAPA 2: ADICIONAR PRODUTOS ----
    // TODO: Crie InventoryPage
    // TODO: Adicione 'Sauce Labs Backpack' e 'Sauce Labs Bike Light'
    // TODO: Verifique que o carrinho mostra 2

    // ---- ETAPA 3: CARRINHO ----
    // TODO: Vá ao carrinho
    // TODO: Crie CartPage e verifique que os 2 itens estão lá

    // ---- ETAPA 4: CHECKOUT — DADOS ----
    // TODO: Clique em Checkout (proceedToCheckout)
    // TODO: Crie CheckoutPage
    // TODO: Preencha os dados com CHECKOUT_INFO.valid
    // TODO: Submeta com submitInfo()

    // ---- ETAPA 5: RESUMO ----
    // TODO: Verifique que a URL é checkoutStepTwo
    // TODO: Verifique que o total contém '$'

    // ---- ETAPA 6: FINALIZAR ----
    // TODO: Finalize a compra com finish()
    // TODO: Verifique que a URL é checkoutComplete
    // TODO: Verifique que o header diz "Thank you for your order!"
  });

  test('fluxo com cancelamento no checkout', async ({ page }) => {
    // TODO: Login → Adicionar 1 item → Cart → Checkout
    // TODO: Em vez de preencher, clique em Cancel
    // TODO: Verifique que voltou pra URL do cart
    //
    // Dica: checkoutPage.cancelButton.click()
  });

  test('checkout deve falhar com dados incompletos', async ({ page }) => {
    // TODO: Login → Add item → Cart → Checkout
    // TODO: Clique em Continue SEM preencher nada
    // TODO: Verifique que o erro "First Name is required" aparece
  });
});

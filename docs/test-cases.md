# Casos de Teste — SauceDemo

## 01 — Funcional: Login

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-001 | Exibir página de login | Acessar `/` | Verificar logo, inputs, botão | Todos visíveis | Alta |
| TC-002 | Login válido | Estar na página de login | Inserir `standard_user` / `secret_sauce`, clicar Login | Redireciona para `/inventory.html` | Alta |
| TC-003 | Usuário bloqueado | Estar na página de login | Inserir `locked_out_user` / `secret_sauce` | Erro com texto "locked out" | Alta |
| TC-004 | Senha incorreta | Estar na página de login | Inserir `standard_user` / `senha_errada` | Erro "Username and password do not match" | Alta |
| TC-005 | Campos vazios | Estar na página de login | Clicar Login sem preencher | Erro "Username is required" | Média |
| TC-006 | Senha vazia | Estar na página de login | Preencher só username, clicar Login | Erro "Password is required" | Média |
| TC-007 | Fechar mensagem de erro | Erro visível na tela | Clicar no botão X do erro | Erro desaparece | Baixa |

## 01 — Funcional: Inventário

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-008 | Exibir 6 produtos | Logado como `standard_user` | Contar itens no inventário | Exatamente 6 itens | Alta |
| TC-009 | Adicionar ao carrinho | Logado, inventário visível | Clicar "Add to cart" no Backpack | Badge do carrinho = 1 | Alta |
| TC-010 | Remover do carrinho | Item adicionado | Clicar "Remove" no mesmo item | Badge do carrinho = 0 | Alta |
| TC-011 | Adicionar múltiplos | Logado | Adicionar 3 itens diferentes | Badge do carrinho = 3 | Alta |
| TC-012 | Ordenar A-Z | Logado | Selecionar "Name (A to Z)" | Lista em ordem alfabética | Média |
| TC-013 | Ordenar Z-A | Logado | Selecionar "Name (Z to A)" | Lista em ordem inversa | Média |
| TC-014 | Ordenar preço crescente | Logado | Selecionar "Price (low to high)" | Preços em ordem crescente | Média |
| TC-015 | Ordenar preço decrescente | Logado | Selecionar "Price (high to low)" | Preços em ordem decrescente | Média |

## 02 — Autenticação

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-016 | Acesso direto ao inventário | Não logado | Navegar para `/inventory.html` | Erro "only access when logged in" | Alta |
| TC-017 | Acesso direto ao carrinho | Não logado | Navegar para `/cart.html` | Erro "only access when logged in" | Alta |
| TC-018 | Acesso direto ao checkout | Não logado | Navegar para `/checkout-step-one.html` | Erro "only access when logged in" | Alta |
| TC-019 | Logout | Logado | Menu hamburguer → Logout | Retorna ao login | Alta |
| TC-020 | Acesso após logout | Após logout | Navegar para `/inventory.html` | Erro "only access when logged in" | Alta |

## 03 — API / Intercept

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-021 | Interceptar imagens | Logado | Ouvir requests de imagem, recarregar | Requests de imagem capturados | Média |
| TC-022 | Bloquear imagens | Logado | Abortar rotas de imagem, recarregar | Imagens com naturalWidth = 0 | Média |
| TC-023 | Simular erro 500 | Logado | Fulfil `/inventory.html` com status 500 | Resposta com status 500 | Média |

## 04 — CRUD: Carrinho

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-024 | CREATE — adicionar item | Logado | Add item → ir ao cart | Item aparece no carrinho | Alta |
| TC-025 | READ — listar itens | 2 itens adicionados | Ir ao cart | 2 itens corretos listados | Alta |
| TC-026 | DELETE — remover item | 2 itens no cart | Remover 1 item | 1 item restante, correto | Alta |
| TC-027 | DELETE ALL — esvaziar | 2 itens no cart | Remover todos | Carrinho vazio | Média |
| TC-028 | Continue Shopping | No carrinho | Clicar "Continue Shopping" | Retorna ao inventário | Baixa |

## 05 — Acessibilidade

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-029 | Labels no login | Página de login | Verificar placeholders e values | Username, Password, Login presentes | Média |
| TC-030 | Estrutura do inventário | Logado | Verificar títulos e preços | Todos itens com nome e preço visíveis | Média |
| TC-031 | Navegação por teclado | Página de login | Pressionar Tab | Foco move para input | Média |
| TC-032 | Erro acessível | Erro visível | Verificar conteúdo textual | Texto do erro presente e legível | Média |

## 06 — Visual Regression

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-033 | Snapshot do login | Página de login carregada | Comparar screenshot | Diff < 5% | Baixa |
| TC-034 | Snapshot do inventário | Logado | Comparar screenshot | Diff < 5% | Baixa |
| TC-035 | Snapshot do estado de erro | Erro de login visível | Comparar screenshot | Diff < 5% | Baixa |

## 07 — Performance

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-036 | Login rápido | Página de login | Login standard_user, medir tempo | < 3 segundos | Média |
| TC-037 | Login lento (glitch) | Página de login | Login performance_glitch_user | > 500ms (documentado) | Baixa |
| TC-038 | Carregamento inventário | Logado | Reload, medir networkidle | < 5 segundos | Média |
| TC-039 | Web Vitals | Logado | Medir via Performance API | DOM < 5s, Load < 10s | Média |

## 08 — E2E Journeys

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-040 | Compra completa | Não logado | Login → Add 2 → Cart → Checkout → Finish | "Thank you for your order!" | Alta |
| TC-041 | Cancelar checkout | Item no carrinho | Iniciar checkout → Cancel | Retorna ao carrinho | Média |
| TC-042 | Checkout sem dados | Item no carrinho | Checkout → Submit vazio | Erro "First Name is required" | Alta |

## 09 — Edge Cases

| ID | Cenário | Pré-condição | Passos | Resultado Esperado | Prioridade |
|----|---------|-------------|--------|-------------------|------------|
| TC-043 | Problem user | Página de login | Login problem_user | Inventário carrega (com bugs visuais) | Média |
| TC-044 | Persistência do carrinho | Item adicionado | Navegar ida/volta ao cart | Item mantido | Alta |
| TC-045 | Checkout com 1 item | 1 item no carrinho | Fluxo completo | Compra finalizada | Média |
| TC-046 | Checkout com 6 itens | Todos 6 itens adicionados | Fluxo completo | Compra finalizada | Média |
| TC-047 | Username com espaços | Página de login | Login com espaços extras | Erro de login | Baixa |

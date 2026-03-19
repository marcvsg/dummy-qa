# 🧪 SauceDemo QA Automation — Projeto de Estudo

Projeto de **estudo guiado** de automação de testes para o [SauceDemo](https://www.saucedemo.com/) usando **Playwright + TypeScript**.

Os Page Objects e a estrutura já estão prontos. Os testes vêm como **exercícios com TODOs** pra você completar, com dicas e exemplos resolvidos em cada arquivo.

## 📋 Sobre o Projeto

Este projeto cobre 9 categorias de teste pra você praticar:

- **Testes Funcionais** — Login, inventário, ordenação, carrinho
- **Autenticação** — Controle de sessão e acesso
- **API / Intercept** — Mock de rotas, bloqueio de recursos
- **CRUD** — Operações completas no carrinho
- **Acessibilidade** — Validação de labels, foco, semântica
- **Visual Regression** — Screenshot comparison
- **Performance** — Tempo de resposta, Web Vitals
- **E2E Journeys** — Fluxo completo de compra
- **Edge Cases** — Cenários limítrofes e usuários problemáticos

## 🛠️ Tecnologias

- [Playwright](https://playwright.dev/) — Framework de automação
- [TypeScript](https://www.typescriptlang.org/) — Tipagem estática
- **Page Object Model (POM)** — Padrão de organização

## 🚀 Como Rodar

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/saucedemo-qa-playwright.git
cd saucedemo-qa-playwright

# Instalar dependências
npm install

# Instalar browsers do Playwright
npx playwright install

# Rodar todos os testes
npm test

# Rodar com interface visual
npm run test:ui

# Rodar em modo headed (ver o browser)
npm run test:headed

# Gerar relatório HTML
npm run test:report
```

## 📂 Estrutura do Projeto

```
src/
├── pages/                          # Page Objects (POM)
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── tests/
│   ├── 01-functional/              # Testes funcionais
│   │   ├── login.spec.ts
│   │   └── inventory.spec.ts
│   ├── 02-authentication/          # Sessão e controle de acesso
│   │   └── session.spec.ts
│   ├── 03-api/                     # Intercept e mock de rotas
│   │   └── route-intercept.spec.ts
│   ├── 04-crud/                    # CRUD no carrinho
│   │   └── cart-crud.spec.ts
│   ├── 05-accessibility/           # Testes de acessibilidade
│   │   └── a11y-basic.spec.ts
│   ├── 06-visual/                  # Visual regression
│   │   └── screenshot-comparison.spec.ts
│   ├── 07-performance/             # Performance e Web Vitals
│   │   └── web-vitals.spec.ts
│   ├── 08-e2e-journeys/            # Jornadas completas
│   │   └── full-user-journey.spec.ts
│   └── 09-edge-cases/              # Cenários limítrofes
│       └── edge-cases.spec.ts
└── fixtures/
    └── test-data.ts                # Dados de teste centralizados
```

## 🧪 Rodar por Categoria

```bash
npm run test:functional   # 01 - Testes funcionais
npm run test:auth         # 02 - Autenticação
npm run test:api          # 03 - API / Intercept
npm run test:crud         # 04 - CRUD
npm run test:a11y         # 05 - Acessibilidade
npm run test:visual       # 06 - Visual regression
npm run test:perf         # 07 - Performance
npm run test:e2e          # 08 - E2E journeys
npm run test:edge         # 09 - Edge cases
```

## 👤 Usuários de Teste

| Usuário | Comportamento |
|---------|--------------|
| `standard_user` | Funciona normalmente |
| `locked_out_user` | Bloqueado — não consegue logar |
| `problem_user` | Tem bugs propositais (imagens erradas, etc.) |
| `performance_glitch_user` | Login e navegação lentos |
| `error_user` | Gera erros em ações específicas |
| `visual_user` | Layout inconsistente |

**Senha para todos:** `secret_sauce`

## 📖 Como Estudar

1. **Comece pelo `01-functional/login.spec.ts`** — tem um exemplo resolvido e os TODOs são simples
2. **Leia o Page Object antes de cada exercício** — os métodos que você vai usar estão documentados lá
3. **Rode os testes conforme completa** — `npm run test:functional` pra ver se passa
4. **Avance na ordem das pastas** — a dificuldade cresce de 01 a 09
5. **O exercício 09 (E2E) é o "boss final"** — junta tudo que você praticou

Cada arquivo tem:
- Um bloco de comentário explicando os **conceitos praticados**
- **1 exemplo resolvido** pra usar como referência
- **TODOs com dicas** detalhadas pra cada teste
- **Desafios bônus** nos exercícios mais avançados

## 📊 Padrões Utilizados

- **Page Object Model (POM)** — Cada página tem sua classe com locators e métodos
- **Data-driven Testing** — Dados centralizados em `fixtures/test-data.ts`
- **Nomenclatura em PT-BR** — Nomes de teste descritivos em português
- **Seletores `data-test`** — Priorizando atributos de teste estáveis

## 📝 Licença

MIT

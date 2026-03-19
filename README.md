# SauceDemo — Automação QA

Projeto de estudo de automação de testes no [SauceDemo](https://www.saucedemo.com/) com Playwright + TypeScript.

Os Page Objects já estão prontos. Os testes têm TODOs pra eu completar.

## Stack

- Playwright
- TypeScript
- Page Object Model (POM)

## Como rodar

```bash
npm install
npx playwright install
npm test
```

## Estrutura

```
src/
├── pages/           # Page Objects (prontos)
├── tests/
│   ├── 01-functional/
│   ├── 02-authentication/
│   ├── 03-api/
│   ├── 04-crud/
│   ├── 05-accessibility/
│   ├── 06-visual/
│   ├── 07-performance/
│   ├── 08-e2e-journeys/
│   └── 09-edge-cases/
└── fixtures/
    └── test-data.ts
```

## Usuários de teste

| Usuário | Comportamento |
|---------|--------------|
| `standard_user` | Funciona normal |
| `locked_out_user` | Bloqueado |
| `problem_user` | Bugs propositais |
| `performance_glitch_user` | Lento |

Senha de todos: `secret_sauce`

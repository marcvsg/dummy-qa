# Plano de Teste — SauceDemo

## 1. Objetivo

Validar o funcionamento do e-commerce SauceDemo cobrindo funcionalidades críticas, segurança de sessão, performance, acessibilidade e cenários limítrofes através de testes automatizados com Playwright.

## 2. Escopo

### Em escopo
- Login e autenticação (todos os tipos de usuário)
- Catálogo de produtos (listagem, ordenação, filtros)
- Carrinho de compras (adicionar, remover, visualizar)
- Fluxo de checkout completo
- Controle de sessão e acesso
- Interceptação de rotas e mock de rede
- Acessibilidade básica
- Visual regression
- Performance e Web Vitals
- Cenários limítrofes e edge cases

### Fora do escopo
- Testes de carga/stress
- Testes de segurança avançados (penetration testing)
- Testes em dispositivos móveis reais
- Integração com sistemas de pagamento (não existe no SauceDemo)

## 3. Tipos de Teste

| Categoria | Pasta | Descrição |
|-----------|-------|-----------|
| Funcional | `01-functional` | Validação das funcionalidades principais |
| Autenticação | `02-authentication` | Sessão, logout, proteção de rotas |
| API/Intercept | `03-api` | Mock de rotas, bloqueio de recursos |
| CRUD | `04-crud` | Operações Create/Read/Delete no carrinho |
| Acessibilidade | `05-accessibility` | Labels, foco, semântica HTML |
| Visual | `06-visual` | Screenshot comparison entre execuções |
| Performance | `07-performance` | Tempo de resposta, Web Vitals |
| E2E | `08-e2e-journeys` | Jornadas completas do usuário |
| Edge Cases | `09-edge-cases` | Cenários limítrofes e usuários problemáticos |

## 4. Ambiente de Teste

- **URL:** https://www.saucedemo.com
- **Browser:** Chromium (via Playwright)
- **OS:** Cross-platform (Windows, macOS, Linux)
- **Framework:** Playwright + TypeScript

## 5. Critérios de Entrada

- Ambiente do SauceDemo acessível
- Dependências instaladas (`npm install`)
- Browsers do Playwright instalados (`npx playwright install`)

## 6. Critérios de Saída

- Todos os testes funcionais e de autenticação passando (100%)
- Testes visuais com baseline atualizado
- Relatório HTML gerado sem erros críticos
- Nenhum bug blocker em aberto

## 7. Riscos

| Risco | Impacto | Mitigação |
|-------|---------|-----------|
| SauceDemo fora do ar | Alto | Retry automático, fallback offline |
| Mudança no DOM do site | Médio | Seletores `data-test` são estáveis |
| Testes visuais quebrando por mudanças cosméticas | Baixo | `maxDiffPixelRatio` configurado |
| Performance variando por rede | Médio | Thresholds generosos, CI com rede estável |

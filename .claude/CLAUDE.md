# Claude Code — Project Directives

## Architecture

- **Component-driven frontend.** React feature folders group related components, hooks, and types. Shared UI primitives live in `components/ui/`.
- **Feature modules.** Each domain feature owns its components, hooks, API calls, and types. Cross-feature imports go through barrel exports (`index.ts`).
- **Pages are thin.** Pages compose feature components and handle routing. No business logic in pages.
- **Typed contracts.** All API calls are typed with request/response interfaces. No `any` types.
- **Consistent patterns.** Forms use controlled components with validation. API calls go through feature-specific functions.

## Rules

1. **Never do broad refactors when tests are failing.** Fix the failing tests first, then refactor.
2. **Never disable or skip tests to make a build pass.** Fix the root cause.
3. **Never commit code that doesn't compile.** Run `npm run build` before declaring done.
4. **Update docs when commands or structure change.** If you add a new module, page, or script, update the relevant CONVENTIONS.md section or README.
5. **Prefer small, reviewable changes.** One concern per commit. If a task touches more than 5 files, consider splitting.
6. **No secrets in code.** Use environment variables. Never hardcode credentials, tokens, or API keys.

## Definition of Done

A task is complete only when ALL of the following pass:

| Gate              | Command                              |
|-------------------|--------------------------------------|
| Frontend installs | `cd frontend && npm ci`              |
| Frontend lint     | `cd frontend && npm run lint`        |
| Frontend tests    | `cd frontend && npm test`            |
| Frontend builds   | `cd frontend && npm run build`       |
| No new warnings   | Zero new compiler/lint warnings      |

If any gate fails, the task is **not done**. Fix the failure before moving on.

## Stack Reference

| Layer     | Tech                          |
|-----------|-------------------------------|
| Framework | React 19 + TypeScript (Vite 7)|
| Styling   | Tailwind CSS 4                |
| Testing   | Vitest, React Testing Library |
| Forms     | Formspree                     |
| Routing   | React Router                  |

# CoOperate

A platform for launching and running worker-owned cooperatives. Legal templates, governance tools, profit-sharing automation, democratic decision-making.

Demo project for Chris Nienhuis's portfolio at neenhouse.com.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- React Router 7
- Cloudflare Pages (deployment)
- Vitest + Testing Library (testing)

## Dev Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm test         # Run tests (vitest)
pnpm lint         # Run ESLint
```

## Conventions

- Use functional components with hooks
- TypeScript strict mode
- File naming: kebab-case for files, PascalCase for components
- Tests co-located next to source files as `*.test.tsx`
- Use React Router for all routing
- No CSS frameworks — use CSS modules or vanilla CSS

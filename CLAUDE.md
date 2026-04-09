# CoOperate

A trust manufacturing system for worker-owned cooperatives. The SaaS features (governance, profit sharing, legal templates) are the substrate — the product is the verified democratic provenance and cooperative credit signal that these features produce. Capital facilitation and shared services are the business; the software is bundled free.

Demo project for Chris Nienhuis's portfolio at neenhouse.com.

## Strategic Context

- `docs/vision.md` — Full thesis: irreducible human need, business model, moat (4 layers), flywheel with kill metrics, competitive landscape, year 0-5 milestone plan, anti-thesis, 10 resolved strategic decisions
- `docs/prd.md` — Feature tiers mapped to flywheel functions: Tier 1 (trust collateral substrate), Tier 2 (intermediary toolkit / acquisition), Tier 3 (member experience / retention), Tier 4 (network layer / scale)

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

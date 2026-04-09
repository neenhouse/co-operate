# Capital Matching — Technical Spec

> **PRD reference:** `docs/prd.md` section 2.2
> **Milestone gate:** Year 1-2 — "≥1 CDFI lender accepts CoOperate data package"
> **Flywheel function:** Intake — completes the Plaid layer, opens capital
> facilitation revenue

## What this feature is

A capital matching tool that connects converting businesses to cooperative-
friendly lenders. Shows a lender directory, screens eligibility per deal,
and lets intermediaries track application status. This is the revenue-
generating side of the intermediary toolkit.

## Routes

| Route | Page | Component |
|-------|------|-----------|
| `/app/capital` | Capital matching overview | `CapitalView` |

Lives inside the existing `AppLayout`. Accessible from sidebar and from
deal detail (as a natural workflow: deal → find capital).

## Sidebar addition

Add "Capital" to the nav after "Pipeline":

```
{ to: '/app/capital', label: 'Capital', end: false, icon: CapitalIcon }
```

## Data model

Add to `src/data/mockData.ts`:

```typescript
export interface Lender {
  id: string;
  name: string;
  type: 'cdfi' | 'cooperative-fund' | 'sba' | 'state-program' | 'credit-union';
  description: string;
  minDeal: number;
  maxDeal: number;
  states: string[] | 'national';
  industries: string[] | 'all';
  interestRange: string;
  termRange: string;
  requirements: string[];
}

export interface CapitalApplication {
  id: string;
  dealId: string;
  lenderId: string;
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'funded' | 'declined';
  amount: string;
  submittedDate?: string;
  notes?: string;
}
```

## Mock data — 6 lenders

1. **Shared Capital Cooperative** — CDFI, national, $100K-$5M, cooperative
   lending specialist
2. **Seed Commons** — Cooperative fund, national, $50K-$2M, non-extractive
   lending
3. **Northcountry Cooperative Development Fund** — CDFI, upper Midwest
   (MN, WI, IA, ND, SD), $25K-$1M
4. **The Working World** — Cooperative fund, national, $50K-$500K, focus
   on worker co-ops
5. **Oregon Community Capital** — State program, OR only, $25K-$500K
6. **Colorado Enterprise Fund** — SBA micro-lender, CO only, $10K-$250K

3-4 mock applications connecting existing deals to lenders at various
statuses.

## Components

```
src/components/capital/
  CapitalView.tsx         — Main page: lender directory + applications
  LenderCard.tsx          — Summary card for a lender
  LenderDirectory.tsx     — Filterable grid of lender cards
  ApplicationTracker.tsx  — Status tracker for capital applications
  EligibilityBadge.tsx    — Shows match/partial/no-match for deal-lender fit
```

### CapitalView

Split layout:
- **Left/top: Lender Directory** — Grid of lender cards with filter by
  type (CDFI, co-op fund, SBA, state program). Each card shows name,
  type badge, deal range, geographic coverage, and eligibility match
  against the deals in the pipeline.
- **Right/bottom: Application Tracker** — Table/list of active capital
  applications with deal name, lender, amount, status badge, and
  submitted date. Status flows: draft → submitted → under-review →
  approved/declined → funded.

### LenderCard

Shows: name, type badge, description (2 lines), deal range, states,
interest range. Eligibility indicator showing how many pipeline deals
match this lender's criteria.

### EligibilityBadge

Compares a deal against a lender's criteria (deal size within range,
state coverage, industry match). Returns:
- "Match" (green) — all criteria met
- "Partial" (amber) — some criteria met
- "No match" (gray) — key criteria not met

## Design

Follow existing app patterns (dark theme, gold accent, inline styles).
Capital-specific accents:
- CDFI: green (#16a34a)
- Cooperative fund: purple (#a855f7)
- SBA: blue (#3b82f6)
- State program: amber (#ca8a04)
- Credit union: cyan (#06b6d4)

## Implementation order

1. Data model + mock lenders + mock applications in `mockData.ts`
2. `LenderCard` + `EligibilityBadge` + `LenderDirectory`
3. `ApplicationTracker`
4. `CapitalView` + page + route + sidebar
5. Tests

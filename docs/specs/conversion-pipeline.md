# Conversion Pipeline — Technical Spec

> **PRD reference:** `docs/prd.md` section 2.1
> **Milestone gate:** Year 0-1 — "≥5 intermediaries actively using conversion
> pipeline tools"
> **Flywheel function:** Intake — acquires co-ops through the B2B2C
> intermediary channel

## What this feature is

A structured pipeline for cooperative development intermediaries (attorneys,
cooperative developers, SBDC advisors) to manage worker buyout conversions
from prospect through post-conversion. This is the B2B side of CoOperate's
B2B2C model — the tool that acquires co-ops by making intermediaries more
productive.

## What this feature is NOT

- Not a CRM (no contact management, no email automation)
- Not a project management tool (no Gantt charts, no resource allocation)
- Not a real backend — this is a demo with mock data, consistent with the
  rest of the app

## User persona

**Maria**, a cooperative developer at a regional cooperative development
center. She manages 3-5 active worker buyout conversions simultaneously.
Each conversion takes 12-36 months and involves a retiring business owner,
a group of workers, an attorney, 1-2 lenders, and various state/local
agencies. Maria currently tracks everything in spreadsheets, email threads,
and a shared Google Drive. She needs:

- A single view of all her active deals and their stages
- Per-deal detail showing status, stakeholders, documents, and blockers
- Jurisdiction-specific compliance checklists so she doesn't miss filings
- Quick visibility into which deals need attention now

## Routes

| Route | Page | Component |
|-------|------|-----------|
| `/app/pipeline` | Pipeline overview | `PipelineView` |
| `/app/pipeline/:dealId` | Deal detail | `DealDetail` |

Both routes live inside the existing `AppLayout` (sidebar + main content).

## Sidebar addition

Add "Pipeline" to the nav between "Dashboard" and "Templates":

```
{ to: '/app/pipeline', label: 'Pipeline', end: false, icon: PipelineIcon }
```

Use a funnel or flow icon to distinguish from other nav items.

## Data model

Add to `src/data/mockData.ts`:

```typescript
export type DealStage =
  | 'prospect'
  | 'feasibility'
  | 'valuation'
  | 'financing'
  | 'legal'
  | 'governance-design'
  | 'closing'
  | 'post-conversion';

export interface Deal {
  id: string;
  businessName: string;
  industry: string;
  location: { city: string; state: string };
  stage: DealStage;
  ownerName: string;
  workerCount: number;
  estimatedValue: string;
  startDate: string;
  targetCloseDate: string;
  stakeholders: Stakeholder[];
  documents: DealDocument[];
  compliance: ComplianceItem[];
  blockers: string[];
  notes: string;
}

export interface Stakeholder {
  id: string;
  name: string;
  role: 'owner' | 'worker-lead' | 'attorney' | 'lender' | 'developer' | 'advisor';
  organization?: string;
  email: string;
}

export interface DealDocument {
  id: string;
  title: string;
  type: 'letter-of-intent' | 'feasibility-report' | 'term-sheet' | 'valuation' | 'articles' | 'bylaws' | 'financing-agreement' | 'other';
  status: 'draft' | 'review' | 'final';
  date: string;
}

export interface ComplianceItem {
  id: string;
  title: string;
  jurisdiction: string;
  category: 'state-filing' | 'tax' | 'licensing' | 'labor' | 'corporate';
  completed: boolean;
  dueDate?: string;
  notes?: string;
}
```

## Mock data — 6 deals

Create realistic conversion scenarios spanning multiple stages:

1. **Sunrise Bakery** (Portland, OR) — `closing` stage. The existing demo
   co-op. 12 workers converting a retiring owner's bakery. Most documents
   final. This ties the pipeline to the existing app narrative.

2. **GreenLeaf Landscaping** (Austin, TX) — `financing` stage. 8 workers,
   owner retiring in 6 months. Seeking CDFI financing. 2 blockers: SBA
   lender wants more documentation, state filing delayed.

3. **Harbor Home Care** (Seattle, WA) — `feasibility` stage. 22 workers
   in a home care agency. Municipal conversion funding available. Early
   stage — feasibility study underway.

4. **Atlas Print Shop** (Denver, CO) — `valuation` stage. 5 workers,
   contested valuation between owner and workers. Attorney mediating.

5. **Riverwalk Childcare** (Minneapolis, MN) — `governance-design` stage.
   15 workers designing their cooperative structure. Past financing,
   now choosing governance model.

6. **Mountain Mechanical** (Boise, ID) — `prospect` stage. Initial
   contact from retiring HVAC business owner. 6 workers interested.
   No formal engagement yet.

## Components

### File structure

```
src/components/pipeline/
  PipelineView.tsx        — Main pipeline page (portfolio view)
  DealCard.tsx            — Summary card for a deal
  DealDetail.tsx          — Full deal detail page with tabbed sections
  StageTimeline.tsx       — Visual horizontal timeline of deal stages
  StakeholderList.tsx     — List of people involved in a deal
  DocumentList.tsx        — Deal documents with status badges
  ComplianceChecklist.tsx — Jurisdiction-specific compliance items
```

### PipelineView

The main pipeline page. Two view modes:

**Board view (default):** Kanban-style columns for each stage. Deals
appear as cards in their current stage column. Horizontal scroll for
stages that don't fit. Stage columns show count badge.

**List view:** Table with columns: Business, Stage, Location, Workers,
Est. Value, Target Close, Blockers. Sortable by stage or date. Clicking
a row navigates to deal detail.

Toggle between views via a small control in the page header.

Page header: "Conversion Pipeline" title + deal count + view toggle.

### DealCard

Used in board view. Shows:
- Business name (bold)
- Industry tag
- Location (city, state)
- Worker count
- Target close date
- Blocker indicator (red dot if blockers exist)

Click navigates to `/app/pipeline/:dealId`.

### DealDetail

Full-page deal view with back navigation to pipeline. Sections:

**Header:** Business name, stage badge, industry, location. Stage
timeline showing progression through all 8 stages with current stage
highlighted.

**Tabbed content:**

1. **Overview** — Key facts (owner, worker count, est. value, dates),
   notes, blockers (if any, displayed prominently).
2. **Stakeholders** — List of all people involved with role, org, email.
3. **Documents** — List with type, status badge (draft/review/final),
   date. "Generate" button (non-functional in demo, shows toast).
4. **Compliance** — Checklist grouped by category. Completed items checked.
   Jurisdiction displayed in header.

### StageTimeline

Horizontal bar showing all 8 stages as connected nodes. Current stage is
highlighted (gold accent). Completed stages are filled. Future stages are
outlined. Used in DealDetail header.

Stage labels (abbreviated for space):
Prospect > Feasibility > Valuation > Financing > Legal > Governance > Closing > Post-Conv

### ComplianceChecklist

Grouped by category (state-filing, tax, licensing, labor, corporate).
Each item: checkbox + title + due date (if set) + jurisdiction badge.
Completed items are checked and visually de-emphasized.

## Design

Follow existing app patterns exactly:
- Dark theme (`#0a0a0f` background, `#12121a` cards)
- Gold accent (`#ca8a04`) for active states and highlights
- `Space Grotesk` for headings
- Inline `styles` objects (Record<string, React.CSSProperties>)
- Consistent with existing stat cards, proposal lists, member lists

### Stage colors

Each stage gets a subtle color treatment for board column headers:
- prospect: neutral gray
- feasibility/valuation: blue tint
- financing/legal: amber tint
- governance-design/closing: green tint
- post-conversion: gold (complete)

### Responsive

Pipeline board scrolls horizontally on smaller screens. List view is the
default on mobile-width viewports. Deal detail tabs stack vertically
below 768px.

## Implementation order

1. Data model + mock data in `mockData.ts`
2. `PipelineView` (board view) + `DealCard` + page + route + sidebar
3. `DealDetail` + `StageTimeline` + tabbed sections
4. `StakeholderList` + `DocumentList` + `ComplianceChecklist`
5. List view toggle for `PipelineView`
6. Tests

Each step is independently functional — the pipeline is usable after
step 2, details after step 3, etc.

## Tests

Following existing patterns (co-located `*.test.tsx` with Vitest +
Testing Library):

- `PipelineView.test.tsx` — Renders deal cards, view toggle works
- `DealDetail.test.tsx` — Renders deal info, tabs switch content
- `DealCard.test.tsx` — Renders deal summary, click navigates

## What this enables

The conversion pipeline is the first feature that serves intermediaries
rather than co-op members. It demonstrates:

1. **For the portfolio:** CoOperate is not just a governance tool — it's
   the conversion management platform for the worker buyout ecosystem
2. **For the thesis:** The intermediary toolkit is where AI capacity
   multiplication happens (the 3x throughput target)
3. **For the product:** This is the acquisition surface — intermediaries
   who use the pipeline will onboard their converting businesses as
   CoOperate member co-ops post-conversion

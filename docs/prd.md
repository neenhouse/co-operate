# CoOperate — Product Requirements

> The features in this document are the **substrate**, not the product. The
> product is the trust collateral, governance outcomes data, and capital
> facilitation that these features produce. See `vision.md` for the full
> thesis.

## Build order rationale

Features are tiered by how directly they feed the flywheel described in
`vision.md`. The flywheel: more co-ops → more governance data → stronger
credit signal → lower capital costs → more co-ops. Each tier maps to a
specific flywheel function:

- **Tier 1 (Trust Collateral Substrate):** Generates the governance data
  that feeds the credit signal. This is the flywheel's fuel.
- **Tier 2 (Intermediary Toolkit):** Acquires co-ops through the B2B2C
  channel and multiplies intermediary capacity 3×. This is the flywheel's
  intake — without it, the co-op pipeline is capped at ~200-400/year.
- **Tier 3 (Member Experience):** Retains co-ops post-conversion, ensuring
  ongoing governance data generation. This is the flywheel's sustain loop.
- **Tier 4 (Network Layer):** Activates secondary flywheels (shared
  services, trade) that become the primary revenue engine. Requires ~200+
  co-ops with vertical clustering.

Within each tier, features are ordered by dependency: governance before
analytics (you need decisions to measure), members before profit sharing
(you need an ownership roster to distribute surplus).

### Data model imperative

Every Tier 1 feature must capture data in a format that supports the trust
collateral pipeline from day one. Specifically:

- **Every governance action** must be linkable to external financial records
  (bank transactions, state filings) for cross-validation verification
- **Every member action** must be attributable to a verified human identity
  (the chain of democratic custody)
- **Every financial event** must produce standardized output compatible with
  CDFI underwriting formats and, eventually, SBA/community bank requirements

Building the features without this data architecture produces a governance
tool. Building with it produces a trust manufacturing system. The
difference is the entire business.

---

## Tier 1: Trust Collateral Substrate

These features produce the primary moat — every proposal, vote, financial
allocation, and membership change creates a link in the chain of democratic
custody. The verified output is the credit signal that lenders, municipalities,
and partners price against.

### 1.1 Governance & Democratic Decisions

**Status:** COMPLETE (demo) | **Route:** `/app/governance`

**Goal:** Produce an immutable, auditable record of democratic decision-making
that becomes the core of CoOperate's trust collateral.

- Create proposals with title, description, and voting options
- Configurable voting rules: simple majority, supermajority, unanimous
- Asynchronous voting with configurable deadlines
- Discussion threads attached to each proposal
- Amendment proposals that modify active proposals
- Quorum tracking with real-time progress indicators
- Decision history log with full audit trail
- Notification system for approaching deadlines

**Trust output:** Every decision in the audit trail is a data point in the
governance outcomes dataset (moat layer 2) and a verifiable signal for the
trust collateral layer (moat layer 1).

**Components:** `ProposalList`, `ProposalDetail`, `VotingWidget`

### 1.2 Member Identity & Equity

**Status:** COMPLETE (demo) | **Route:** `/app/members`

**Goal:** Maintain a verified membership roster with equity positions — the
identity chain that makes governance decisions attributable to real humans.

- Invite new members via email or link
- Role assignment: member, board member, officer, admin
- Equity tracking per member (patronage, capital contributions)
- Member status lifecycle: active, probationary, inactive, departed
- Member activity history (votes cast, proposals authored, discussions)

**Trust output:** Verified member identities link to governance records,
creating the chain of democratic custody. Lenders see not just "this co-op
voted yes" but "these 12 verified members voted, with these equity positions."

**Components:** `MemberList`, `MemberInvite`

### 1.3 Financial Transparency & Profit Sharing

**Status:** COMPLETE (demo) | **Route:** `/app/profit-sharing`

**Goal:** Make every financial allocation visible, auditable, and simulatable
— producing the verified financials that de-risk lender underwriting.

- Configure distribution rules: equal split, hours-based, role-weighted, hybrid
- View individual and aggregate allocations
- Run simulations with different rule sets before committing
- Historical distribution records with full audit trail
- Treasury balance visibility for all members

**Trust output:** Verified financial records — surplus history, distribution
patterns, treasury health — feed directly into the trust collateral layer.
A lender reviewing a CoOperate-verified co-op sees standardized, auditable
financials instead of a shoebox of spreadsheets.

**Components:** `DistributionConfig`, `AllocationView`, `Simulator`

---

## Tier 2: Intermediary Toolkit

The B2B2C acquisition channel. Cooperative development organizations, attorneys,
and conversion facilitators use these tools to manage worker buyouts. They are
CoOperate's distribution — the product for intermediaries is conversion
management, the product for workers is the post-conversion operating system.

Build order: intermediary tooling comes first because it's the acquisition
engine. The wedge audience (retiring business owners + conversion intermediaries)
doesn't need the member tools until *after* conversion closes.

### 2.1 Conversion Pipeline

**Status:** COMPLETE (demo) | **Route:** `/app/pipeline`, `/app/pipeline/:dealId`

**Goal:** Give cooperative developers a structured pipeline for managing worker
buyouts — from initial owner contact through closed conversion.

- Deal stages: prospect, feasibility study, valuation, financing, legal
  restructuring, governance design, closing, post-conversion support
- Per-deal dashboard: status, documents, stakeholders, timeline, blockers
- Document generation: letters of intent, feasibility reports, term sheets
- Compliance checklist per jurisdiction (pulls from regulatory graph)
- Multi-deal portfolio view for intermediaries managing 5-20 conversions

**Components:** `PipelineView`, `DealCard`, `DealDetail`, `StageTimeline`,
`StakeholderList`, `DocumentList`, `ComplianceChecklist`

**Why this matters:** Intermediaries currently track conversions in spreadsheets
and email. The conversion process has 6+ months of human-intensive steps.
CoOperate doesn't automate the humans away — it gives them a structured
workspace that produces standardized data as a byproduct. That data feeds
the trust collateral and governance outcomes layers.

### 2.2 Capital Matching

**Status:** COMPLETE (demo) | **Route:** `/app/capital`

**Goal:** Connect converting businesses to cooperative-friendly capital sources
with standardized, pre-verified application packages.

- Lender directory: CDFIs, cooperative loan funds, ESOP lenders, state programs
- Eligibility pre-screening per lender (based on deal size, state, industry)
- Standardized application package generation from conversion pipeline data
- Capital stack modeling: how much from each source, at what terms
- Status tracking: application submitted, under review, approved, funded

**Why this matters:** This is the Plaid layer. CoOperate standardizes and
verifies the data that lenders need, reducing their cost of due diligence.
The capital facilitation fee (1-3% of deployed capital, paid by lender as
underwriting cost reduction) is the acquisition-phase revenue engine.

**Components:** `CapitalView`, `LenderDirectory`, `LenderCard`,
`ApplicationTracker`, `EligibilityBadge`

### 2.3 Legal Templates — Conversion Focus

**Status:** COMPLETE (demo, needs expansion) | **Route:** `/app/templates`

**Goal:** Remove legal barriers to cooperative conversion with jurisdiction-
aware document generation.

Current (built):
- Browse library of cooperative legal documents
- Template categories: bylaws, operating agreements, articles of incorporation
- Preview documents before generating
- Customizable fields (co-op name, state, member count, etc.)

Planned expansion:
- Conversion-specific templates: articles of conversion, asset purchase
  agreements, seller financing notes, member buy-in agreements
- Jurisdiction-aware defaults (auto-fill state-specific provisions)
- Attorney review workflow: intermediary generates draft, attorney marks up,
  final version enters the governance audit trail
- Template versioning with change history

**Components:** `TemplateLibrary`, `TemplatePreview`

---

## Tier 3: Member Experience

Post-conversion operating system. The retention surface. These features keep
co-ops on the platform after conversion closes, generating the ongoing
governance and financial data that compounds the trust collateral moat.

### 3.1 Co-op Dashboard

**Status:** COMPLETE (demo) | **Route:** `/app`

**Goal:** Central operational hub for day-to-day cooperative management.

- Overview stats: member count, treasury balance, active proposals, upcoming votes
- Governance status: pending proposals, recent decisions, quorum health
- Member roster summary with roles and equity
- Quick-action shortcuts to common tasks

**Components:** `DashboardOverview`, `StatCard`

### 3.2 Analytics & Health Metrics

**Status:** COMPLETE (demo) | **Route:** `/app/analytics`

**Goal:** Measure cooperative health and engagement — both for members and for
the governance outcomes dataset.

- Co-op health metrics: financial stability, governance participation, membership growth
- Engagement scores: voting participation rate, discussion activity, proposal throughput
- Financial overview: revenue trends, expense breakdown, surplus history
- Exportable reports for board meetings

**Trust output:** Health metrics feed into the governance outcomes dataset.
Aggregated across hundreds of co-ops, this data reveals which governance
patterns correlate with survival — the Bloomberg-for-cooperatives dataset
that is moat layer 2.

**Components:** `EngagementChart`, `HealthMetrics`

---

## Tier 4: Network Layer

Requires ~200+ member co-ops with vertical clustering to be meaningful.
Do not build until Tiers 1-3 are producing real trust collateral data.

### 4.1 Inter-Coop Trade Directory

**Status:** FUTURE (year 3+)

Member co-ops listed by industry, geography, and capabilities. Preferential
trade terms for platform members. Requires supply-chain density within
industries — a converted bakery and a converted plumber don't trade with
each other.

### 4.2 Shared Services Marketplace

**Status:** FUTURE (year 3+)

Group-negotiated bookkeeping, insurance, payroll, compliance, legal counsel.
This becomes the primary revenue engine at ~200 member co-ops, replacing
capital facilitation fees as the retention-phase revenue driver.

### 4.3 Governance Benchmarking

**Status:** FUTURE (year 3+)

"How does your co-op compare?" — voting participation, surplus distribution
patterns, member retention, financial stability vs. cohort averages. Requires
the governance outcomes dataset to have enough breadth to be statistically
meaningful.

---

## Marketing

### Landing Page

**Status:** COMPLETE (demo) | **Route:** `/`

**Goal:** Convert two audiences: (1) intermediaries evaluating the conversion
toolkit, (2) workers/owners exploring cooperative formation.

- Hero: "The Conversion Platform for Worker Ownership" — intermediary-first
  positioning with dual CTAs (Pipeline for intermediaries, App for co-ops)
- Features: Two-tier layout — intermediary toolkit (pipeline, capital, compliance)
  above co-op tools (governance, profit sharing, members)
- Social proof: Intermediary testimonials (Project Equity, NWCDC) + co-op
  testimonials, conversion-focused stats (850+ conversions, $340M deployed)
- Dual CTA paths: "Start Managing Conversions" + "Explore as a Co-op"
- Responsive design, mobile-first

**Components:** `HeroSection`, `FeaturesSection`, `SocialProof`, `CTASection`

---

## Next build priorities

Given the current state (Tier 1 + Tier 3 complete as demos, Tier 2 unbuilt),
the build order maps to the year 0-1 and year 1-2 milestone gates in
`vision.md`. Each priority is ordered by which gate it unlocks.

1. **Conversion Pipeline (2.1)** — The intermediary toolkit is the acquisition
   channel. Without it, CoOperate acquires co-ops through the software funnel
   (which AI-enabled DIY erodes). With it, CoOperate acquires through the
   capital funnel (which gets stronger as trust collateral compounds).
   *Unlocks year 0-1 gate: ≥5 intermediaries actively using conversion tools.*

2. **Capital Matching (2.2)** — Completes the Plaid layer and opens the
   capital facilitation revenue stream.
   *Unlocks year 1-2 gate: ≥1 CDFI lender accepts CoOperate data package.*

3. **Legal Templates expansion (2.3)** — Conversion-specific templates close
   the gap between intermediary pipeline and legal close.
   *Supports year 1-2: reduces per-deal friction, enables 3× throughput.*

4. **Verification infrastructure** — Cross-validation layer connecting
   governance records to bank transactions and state filings. This must be
   architected into Tier 1 data models before the first CDFI integration,
   not retrofitted after.
   *Unlocks year 2-3 gate: measurable default rate differential.*

5. **Landing page B2B2C reframe** — Update messaging for the intermediary
   audience alongside or after Tier 2 build.
   *Supports year 0-1: intermediary acquisition.*

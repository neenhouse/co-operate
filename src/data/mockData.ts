// CoOperate Mock Data

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'board' | 'officer' | 'admin';
  status: 'active' | 'probationary' | 'inactive';
  equity: number;
  joinDate: string;
  initials: string;
  color: string;
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  proposer: string;
  status: 'active' | 'pending' | 'closed' | 'passed' | 'failed';
  category: string;
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  totalEligible: number;
  quorum: number;
  deadline: string;
  createdAt: string;
}

export interface Template {
  id: string;
  title: string;
  category: 'bylaws' | 'operating' | 'articles' | 'member' | 'board';
  description: string;
  popularity: number;
  content: string;
}

export interface Activity {
  id: string;
  type: 'vote' | 'proposal' | 'member' | 'distribution' | 'template' | 'governance';
  message: string;
  timestamp: string;
}

export interface Distribution {
  id: string;
  date: string;
  totalAmount: number;
  rule: string;
  memberCount: number;
}

export interface MonthlyFinancial {
  month: string;
  revenue: number;
  expenses: number;
  surplus: number;
}

export type DealStage =
  | 'prospect'
  | 'feasibility'
  | 'valuation'
  | 'financing'
  | 'legal'
  | 'governance-design'
  | 'closing'
  | 'post-conversion';

export const DEAL_STAGES: { key: DealStage; label: string; shortLabel: string }[] = [
  { key: 'prospect', label: 'Prospect', shortLabel: 'Prospect' },
  { key: 'feasibility', label: 'Feasibility Study', shortLabel: 'Feasibility' },
  { key: 'valuation', label: 'Valuation', shortLabel: 'Valuation' },
  { key: 'financing', label: 'Financing', shortLabel: 'Financing' },
  { key: 'legal', label: 'Legal Restructuring', shortLabel: 'Legal' },
  { key: 'governance-design', label: 'Governance Design', shortLabel: 'Governance' },
  { key: 'closing', label: 'Closing', shortLabel: 'Closing' },
  { key: 'post-conversion', label: 'Post-Conversion', shortLabel: 'Post-Conv' },
];

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

export const members: Member[] = [
  { id: '1', name: 'Maria Santos', email: 'maria@sunrise.coop', role: 'admin', status: 'active', equity: 48200, joinDate: '2022-03-15', initials: 'MS', color: '#ca8a04' },
  { id: '2', name: 'James Chen', email: 'james@sunrise.coop', role: 'board', status: 'active', equity: 45800, joinDate: '2022-03-15', initials: 'JC', color: '#16a34a' },
  { id: '3', name: 'Aisha Williams', email: 'aisha@sunrise.coop', role: 'board', status: 'active', equity: 44100, joinDate: '2022-04-01', initials: 'AW', color: '#a855f7' },
  { id: '4', name: 'David Kim', email: 'david@sunrise.coop', role: 'officer', status: 'active', equity: 42500, joinDate: '2022-05-10', initials: 'DK', color: '#ef4444' },
  { id: '5', name: 'Elena Rodriguez', email: 'elena@sunrise.coop', role: 'member', status: 'active', equity: 38900, joinDate: '2022-06-20', initials: 'ER', color: '#3b82f6' },
  { id: '6', name: 'Marcus Johnson', email: 'marcus@sunrise.coop', role: 'member', status: 'active', equity: 37200, joinDate: '2022-07-15', initials: 'MJ', color: '#f97316' },
  { id: '7', name: 'Sarah Patel', email: 'sarah@sunrise.coop', role: 'member', status: 'active', equity: 35600, joinDate: '2022-08-01', initials: 'SP', color: '#14b8a6' },
  { id: '8', name: 'Omar Khalil', email: 'omar@sunrise.coop', role: 'member', status: 'active', equity: 34100, joinDate: '2022-09-10', initials: 'OK', color: '#ec4899' },
  { id: '9', name: 'Lisa Chang', email: 'lisa@sunrise.coop', role: 'member', status: 'active', equity: 32800, joinDate: '2022-10-05', initials: 'LC', color: '#8b5cf6' },
  { id: '10', name: 'Roberto Silva', email: 'roberto@sunrise.coop', role: 'member', status: 'probationary', equity: 18500, joinDate: '2024-01-15', initials: 'RS', color: '#06b6d4' },
  { id: '11', name: 'Yuki Tanaka', email: 'yuki@sunrise.coop', role: 'member', status: 'probationary', equity: 15200, joinDate: '2024-03-01', initials: 'YT', color: '#84cc16' },
  { id: '12', name: 'Fatima Al-Hassan', email: 'fatima@sunrise.coop', role: 'member', status: 'active', equity: 31400, joinDate: '2022-11-20', initials: 'FA', color: '#f43f5e' },
  { id: '13', name: 'Thomas Weber', email: 'thomas@sunrise.coop', role: 'member', status: 'inactive', equity: 22100, joinDate: '2023-02-10', initials: 'TW', color: '#64748b' },
  { id: '14', name: 'Priya Sharma', email: 'priya@sunrise.coop', role: 'board', status: 'active', equity: 43200, joinDate: '2022-04-15', initials: 'PS', color: '#d946ef' },
];

export const proposals: Proposal[] = [
  { id: '1', title: 'Expand to Second Location', description: 'Proposal to open a second bakery location in the downtown district. Estimated startup cost of $120,000 with projected break-even in 18 months.', proposer: 'Maria Santos', status: 'active', category: 'Expansion', votesFor: 14, votesAgainst: 3, votesAbstain: 2, totalEligible: 24, quorum: 13, deadline: '2026-04-15', createdAt: '2026-03-28' },
  { id: '2', title: 'Update Profit Distribution Formula', description: 'Modify the current equal-split distribution to a hybrid model that weights hours worked (60%) and seniority (40%).', proposer: 'James Chen', status: 'active', category: 'Financial', votesFor: 8, votesAgainst: 6, votesAbstain: 1, totalEligible: 24, quorum: 13, deadline: '2026-04-12', createdAt: '2026-03-25' },
  { id: '3', title: 'New Equipment Purchase: Industrial Mixer', description: 'Purchase a Hobart HL800 industrial mixer to increase production capacity by 40%.', proposer: 'David Kim', status: 'active', category: 'Operations', votesFor: 18, votesAgainst: 1, votesAbstain: 0, totalEligible: 24, quorum: 13, deadline: '2026-04-10', createdAt: '2026-03-20' },
  { id: '4', title: 'Adopt Sustainability Policy', description: 'Implement comprehensive sustainability guidelines including local sourcing requirements and waste reduction targets.', proposer: 'Aisha Williams', status: 'pending', category: 'Policy', votesFor: 0, votesAgainst: 0, votesAbstain: 0, totalEligible: 24, quorum: 13, deadline: '2026-04-20', createdAt: '2026-04-01' },
  { id: '5', title: 'Annual Board Election Process', description: 'Schedule and structure the upcoming annual board member election for Q2 2026.', proposer: 'Elena Rodriguez', status: 'active', category: 'Governance', votesFor: 20, votesAgainst: 0, votesAbstain: 2, totalEligible: 24, quorum: 13, deadline: '2026-04-08', createdAt: '2026-03-15' },
  { id: '6', title: 'Health Insurance Plan Upgrade', description: 'Upgrade from the basic health plan to a comprehensive plan including dental and vision coverage.', proposer: 'Sarah Patel', status: 'passed', category: 'Benefits', votesFor: 21, votesAgainst: 2, votesAbstain: 1, totalEligible: 24, quorum: 13, deadline: '2026-03-15', createdAt: '2026-02-28' },
  { id: '7', title: 'Weekend Hours Reduction', description: 'Reduce weekend operating hours from 7AM-8PM to 8AM-6PM to improve work-life balance.', proposer: 'Marcus Johnson', status: 'failed', category: 'Operations', votesFor: 7, votesAgainst: 15, votesAbstain: 2, totalEligible: 24, quorum: 13, deadline: '2026-03-10', createdAt: '2026-02-20' },
  { id: '8', title: 'Apprenticeship Program Launch', description: 'Create a 6-month apprenticeship program for aspiring bakers from underserved communities.', proposer: 'Priya Sharma', status: 'active', category: 'Community', votesFor: 16, votesAgainst: 2, votesAbstain: 1, totalEligible: 24, quorum: 13, deadline: '2026-04-18', createdAt: '2026-03-30' },
  { id: '9', title: 'Digital Ordering System', description: 'Implement an online ordering and delivery management system.', proposer: 'Lisa Chang', status: 'active', category: 'Technology', votesFor: 11, votesAgainst: 4, votesAbstain: 3, totalEligible: 24, quorum: 13, deadline: '2026-04-14', createdAt: '2026-03-22' },
];

export const templates: Template[] = [
  { id: '1', title: 'Worker Cooperative Bylaws', category: 'bylaws', description: 'Comprehensive bylaws template for worker-owned cooperatives. Covers membership, governance, meetings, and dissolution.', popularity: 94, content: 'ARTICLE I — NAME AND PURPOSE\n\nSection 1.1 Name. The name of this cooperative shall be [COOPERATIVE NAME] (the "Cooperative").\n\nSection 1.2 Purpose. The Cooperative is organized as a worker-owned cooperative to [PURPOSE]. The Cooperative shall operate on a cooperative basis for the mutual benefit of its members.\n\nARTICLE II — MEMBERSHIP\n\nSection 2.1 Eligibility. Any person employed by the Cooperative who has completed the probationary period shall be eligible for membership.\n\nSection 2.2 Admission. New members shall be admitted upon: (a) completion of the probationary period; (b) approval by the Board of Directors; (c) payment of the membership fee.\n\nSection 2.3 Rights. Each member shall have one vote on all matters submitted to a vote of the membership.' },
  { id: '2', title: 'Operating Agreement — LLC Co-op', category: 'operating', description: 'Operating agreement for cooperatives structured as LLCs. Includes capital accounts, profit allocation, and management provisions.', popularity: 87, content: 'OPERATING AGREEMENT OF [COOPERATIVE NAME] LLC\n\nThis Operating Agreement is entered into by the Members listed in Exhibit A.\n\nARTICLE 1 — FORMATION\n1.1 The Members hereby form a limited liability company under the [STATE] LLC Act.\n1.2 The Company shall be managed democratically by its Members on a one-member, one-vote basis.' },
  { id: '3', title: 'Articles of Incorporation', category: 'articles', description: 'State filing document for incorporating a cooperative. Includes required statutory language and cooperative principles.', popularity: 82, content: 'ARTICLES OF INCORPORATION OF [COOPERATIVE NAME]\n\nThe undersigned incorporator hereby forms a cooperative corporation under the laws of [STATE].\n\nARTICLE I — NAME\nThe name of the corporation is [COOPERATIVE NAME].\n\nARTICLE II — PURPOSE\nThe corporation is organized on a cooperative basis for the benefit of its members.' },
  { id: '4', title: 'Member Agreement', category: 'member', description: 'Individual member agreement outlining rights, responsibilities, capital contributions, and membership terms.', popularity: 79, content: 'MEMBER AGREEMENT\n\nThis Agreement is between [COOPERATIVE NAME] ("Cooperative") and [MEMBER NAME] ("Member").\n\n1. MEMBERSHIP. Member agrees to abide by the Bylaws and policies of the Cooperative.\n2. CAPITAL CONTRIBUTION. Member shall contribute $[AMOUNT] as an initial capital contribution.\n3. PATRONAGE. Member shall receive patronage dividends based on labor contributed.' },
  { id: '5', title: 'Board Resolution Template', category: 'board', description: 'Standard template for recording formal board decisions. Includes consent resolutions and meeting minutes format.', popularity: 71, content: 'BOARD RESOLUTION OF [COOPERATIVE NAME]\n\nDate: [DATE]\n\nThe Board of Directors, having a quorum present, hereby resolves:\n\nWHEREAS, [BACKGROUND];\nWHEREAS, [ADDITIONAL CONTEXT];\n\nNOW THEREFORE BE IT RESOLVED, that [RESOLUTION TEXT].\n\nApproved by: [SIGNATURES]' },
  { id: '6', title: 'Patronage Allocation Policy', category: 'bylaws', description: 'Detailed policy for calculating and distributing patronage dividends. Covers allocation methods and payment schedules.', popularity: 68, content: 'PATRONAGE ALLOCATION POLICY\n\n1. ALLOCATION BASIS. Patronage shall be allocated based on [hours worked / equal share / hybrid formula].\n2. DISTRIBUTION SCHEDULE. Allocations shall be distributed [quarterly / annually].\n3. RETAINED PATRONAGE. The Cooperative may retain up to [X]% of allocated patronage for working capital.' },
  { id: '7', title: 'Conflict Resolution Procedures', category: 'operating', description: 'Step-by-step procedures for resolving disputes between members, including mediation and arbitration clauses.', popularity: 63, content: 'CONFLICT RESOLUTION PROCEDURES\n\n1. INFORMAL RESOLUTION. Members shall first attempt to resolve disputes informally through direct communication.\n2. MEDIATION. If informal resolution fails, either party may request mediation through a neutral third party.\n3. ARBITRATION. Unresolved disputes shall be submitted to binding arbitration.' },
  { id: '8', title: 'New Member Onboarding Checklist', category: 'member', description: 'Structured onboarding process for new cooperative members. Covers orientation, training, and probationary period milestones.', popularity: 58, content: 'NEW MEMBER ONBOARDING CHECKLIST\n\n□ Orientation meeting with Board representative\n□ Review and sign Member Agreement\n□ Capital contribution payment plan established\n□ Cooperative principles and values training\n□ Department-specific skills training\n□ Mentor assignment\n□ 90-day probationary review scheduled' },
  { id: '9', title: 'Annual Meeting Procedures', category: 'board', description: 'Guidelines for conducting the annual membership meeting, including notice requirements, agenda, and voting procedures.', popularity: 55, content: 'ANNUAL MEETING PROCEDURES\n\n1. NOTICE. Written notice shall be provided to all members at least 30 days prior to the annual meeting.\n2. QUORUM. A quorum shall consist of [X]% of the membership.\n3. AGENDA. The agenda shall include: financial report, board elections, and any proposals submitted by members.' },
];

export const activities: Activity[] = [
  { id: '1', type: 'vote', message: 'Maria Santos voted Yes on "Expand to Second Location"', timestamp: '2 minutes ago' },
  { id: '2', type: 'member', message: 'Yuki Tanaka completed probationary period review', timestamp: '15 minutes ago' },
  { id: '3', type: 'proposal', message: 'Priya Sharma created proposal "Apprenticeship Program Launch"', timestamp: '1 hour ago' },
  { id: '4', type: 'distribution', message: 'Q1 2026 profit distribution of $42,800 completed', timestamp: '3 hours ago' },
  { id: '5', type: 'vote', message: 'Omar Khalil voted Yes on "Digital Ordering System"', timestamp: '4 hours ago' },
  { id: '6', type: 'governance', message: 'Quorum reached for "Annual Board Election Process"', timestamp: '6 hours ago' },
  { id: '7', type: 'template', message: 'James Chen generated "Member Agreement" from template', timestamp: '1 day ago' },
  { id: '8', type: 'member', message: 'Roberto Silva joined as probationary member', timestamp: '2 days ago' },
  { id: '9', type: 'vote', message: '"Health Insurance Plan Upgrade" passed with 87.5% approval', timestamp: '3 days ago' },
  { id: '10', type: 'proposal', message: 'Lisa Chang created proposal "Digital Ordering System"', timestamp: '4 days ago' },
];

export const distributions: Distribution[] = [
  { id: '1', date: '2026-03-31', totalAmount: 42800, rule: 'Hours-Based', memberCount: 22 },
  { id: '2', date: '2025-12-31', totalAmount: 51200, rule: 'Hours-Based', memberCount: 21 },
  { id: '3', date: '2025-09-30', totalAmount: 38900, rule: 'Equal Split', memberCount: 20 },
  { id: '4', date: '2025-06-30', totalAmount: 44100, rule: 'Equal Split', memberCount: 19 },
  { id: '5', date: '2025-03-31', totalAmount: 35600, rule: 'Equal Split', memberCount: 18 },
  { id: '6', date: '2024-12-31', totalAmount: 47500, rule: 'Role-Weighted', memberCount: 18 },
];

export const monthlyFinancials: MonthlyFinancial[] = [
  { month: 'Oct 2025', revenue: 89200, expenses: 71400, surplus: 17800 },
  { month: 'Nov 2025', revenue: 94800, expenses: 73200, surplus: 21600 },
  { month: 'Dec 2025', revenue: 112500, expenses: 78900, surplus: 33600 },
  { month: 'Jan 2026', revenue: 86400, expenses: 69800, surplus: 16600 },
  { month: 'Feb 2026', revenue: 91700, expenses: 72100, surplus: 19600 },
  { month: 'Mar 2026', revenue: 98300, expenses: 74500, surplus: 23800 },
];

export const testimonials = [
  { name: 'Maria Gonzalez', coopName: 'Project Equity', quote: 'CoOperate cut our per-deal administrative time in half. The conversion pipeline lets me manage twice as many buyouts without dropping balls on compliance.', initials: 'MG', color: '#ca8a04' },
  { name: 'David Chen', coopName: 'Northwest Cooperative Development Center', quote: 'The capital matching tool is a game-changer. Instead of manually screening lenders for each deal, CoOperate pre-qualifies our conversions and generates standardized application packages.', initials: 'DC', color: '#16a34a' },
  { name: 'Rachel Torres', coopName: 'Green Valley Farm Co-op', quote: 'CoOperate made it possible for us to formalize our cooperative in weeks instead of months. The governance tools keep us accountable and transparent.', initials: 'RT', color: '#a855f7' },
];

export const stats = {
  conversionsManaged: '850+',
  capitalDeployed: '$340M',
  intermediaries: '120+',
  coopSurvival: '94%',
};

export const coopInfo = {
  name: 'Sunrise Bakery Co-op',
  memberCount: 24,
  treasury: 847200,
  activeProposals: 7,
  votingParticipation: 89,
};

export const analyticsData = {
  healthScore: 87,
  governanceParticipation: 89,
  financialHealth: 92,
  memberEngagement: 78,
  growthRate: 15,
  engagementBreakdown: [
    { category: 'Voting Participation', score: 89, trend: 'up' as const },
    { category: 'Proposal Creation', score: 72, trend: 'up' as const },
    { category: 'Discussion Activity', score: 65, trend: 'down' as const },
    { category: 'Meeting Attendance', score: 84, trend: 'stable' as const },
    { category: 'Committee Involvement', score: 71, trend: 'up' as const },
  ],
};

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

export const lenders: Lender[] = [
  {
    id: 'l1',
    name: 'Shared Capital Cooperative',
    type: 'cdfi',
    description: 'Cooperative lending specialist providing financing for worker, housing, and consumer cooperatives across the United States.',
    minDeal: 100000,
    maxDeal: 5000000,
    states: 'national',
    industries: 'all',
    interestRange: '4.5%–7.5%',
    termRange: '5–25 years',
    requirements: ['Cooperative structure', 'Business plan', '2 years financial history', 'Member equity commitment'],
  },
  {
    id: 'l2',
    name: 'Seed Commons',
    type: 'cooperative-fund',
    description: 'Non-extractive lending network supporting worker-owned businesses with patient capital and technical assistance.',
    minDeal: 50000,
    maxDeal: 2000000,
    states: 'national',
    industries: 'all',
    interestRange: '2%–6%',
    termRange: '3–15 years',
    requirements: ['Worker ownership commitment', 'Community impact plan', 'Democratic governance plan'],
  },
  {
    id: 'l3',
    name: 'Northcountry Cooperative Development Fund',
    type: 'cdfi',
    description: 'Upper Midwest CDFI focused on cooperative development, providing loans and technical assistance to cooperatives in the region.',
    minDeal: 25000,
    maxDeal: 1000000,
    states: ['MN', 'WI', 'IA', 'ND', 'SD'],
    industries: 'all',
    interestRange: '4%–7%',
    termRange: '3–20 years',
    requirements: ['Located in service area', 'Cooperative structure', 'Feasibility study'],
  },
  {
    id: 'l4',
    name: 'The Working World',
    type: 'cooperative-fund',
    description: 'Non-extractive investment fund focused on worker cooperatives, offering patient capital with returns tied to business success.',
    minDeal: 50000,
    maxDeal: 500000,
    states: 'national',
    industries: 'all',
    interestRange: '3%–6%',
    termRange: '3–10 years',
    requirements: ['Worker cooperative', 'Revenue-generating', 'Democratic governance'],
  },
  {
    id: 'l5',
    name: 'Oregon Community Capital',
    type: 'state-program',
    description: 'State-funded program providing capital access to Oregon businesses transitioning to cooperative ownership.',
    minDeal: 25000,
    maxDeal: 500000,
    states: ['OR'],
    industries: 'all',
    interestRange: '3%–5%',
    termRange: '5–15 years',
    requirements: ['Oregon-based business', 'Conversion plan', 'Worker participation agreement'],
  },
  {
    id: 'l6',
    name: 'Colorado Enterprise Fund',
    type: 'sba',
    description: 'SBA micro-lender serving Colorado small businesses and cooperatives with flexible financing options.',
    minDeal: 10000,
    maxDeal: 250000,
    states: ['CO'],
    industries: 'all',
    interestRange: '5%–9%',
    termRange: '1–7 years',
    requirements: ['Colorado-based', 'SBA eligibility', 'Business plan', 'Personal guarantee'],
  },
];

export const capitalApplications: CapitalApplication[] = [
  {
    id: 'ca1',
    dealId: '1',
    lenderId: 'l1',
    status: 'approved',
    amount: '$800,000',
    submittedDate: '2025-09-15',
    notes: 'Term sheet finalized. Closing scheduled to align with conversion timeline.',
  },
  {
    id: 'ca2',
    dealId: '2',
    lenderId: 'l2',
    status: 'under-review',
    amount: '$600,000',
    submittedDate: '2026-03-01',
    notes: 'Application complete. Seed Commons reviewing community impact assessment.',
  },
  {
    id: 'ca3',
    dealId: '2',
    lenderId: 'l6',
    status: 'declined',
    amount: '$200,000',
    submittedDate: '2026-02-10',
    notes: 'Declined — business is located in Texas, outside Colorado service area.',
  },
  {
    id: 'ca4',
    dealId: '3',
    lenderId: 'l3',
    status: 'draft',
    amount: '$1,200,000',
    notes: 'Draft application in progress. Awaiting feasibility study completion.',
  },
];

export const deals: Deal[] = [
  {
    id: '1',
    businessName: 'Sunrise Bakery',
    industry: 'Food & Beverage',
    location: { city: 'Portland', state: 'OR' },
    stage: 'closing',
    ownerName: 'Harold Fischer',
    workerCount: 12,
    estimatedValue: '$1.2M',
    startDate: '2025-03-15',
    targetCloseDate: '2026-05-01',
    stakeholders: [
      { id: 's1', name: 'Harold Fischer', role: 'owner', email: 'harold@sunrisebakery.com' },
      { id: 's2', name: 'Maria Santos', role: 'worker-lead', email: 'maria@sunrise.coop' },
      { id: 's3', name: 'Patricia Nguyen', role: 'attorney', organization: 'Nguyen Cooperative Law', email: 'patricia@nguyenlaw.com' },
      { id: 's4', name: 'David Morales', role: 'developer', organization: 'Oregon Cooperative Development Center', email: 'david@ocdc.org' },
      { id: 's5', name: 'Sarah Kim', role: 'lender', organization: 'Shared Capital Cooperative', email: 'sarah@sharedcapital.coop' },
    ],
    documents: [
      { id: 'd1', title: 'Letter of Intent', type: 'letter-of-intent', status: 'final', date: '2025-04-10' },
      { id: 'd2', title: 'Business Valuation Report', type: 'valuation', status: 'final', date: '2025-07-22' },
      { id: 'd3', title: 'Feasibility Study', type: 'feasibility-report', status: 'final', date: '2025-06-15' },
      { id: 'd4', title: 'Term Sheet — Shared Capital', type: 'term-sheet', status: 'final', date: '2025-10-03' },
      { id: 'd5', title: 'Articles of Incorporation', type: 'articles', status: 'final', date: '2026-01-18' },
      { id: 'd6', title: 'Worker Cooperative Bylaws', type: 'bylaws', status: 'review', date: '2026-03-05' },
      { id: 'd7', title: 'Seller Financing Agreement', type: 'financing-agreement', status: 'draft', date: '2026-03-20' },
    ],
    compliance: [
      { id: 'c1', title: 'File Articles of Incorporation with Oregon SOS', jurisdiction: 'Oregon', category: 'state-filing', completed: true },
      { id: 'c2', title: 'Obtain EIN from IRS', jurisdiction: 'Federal', category: 'tax', completed: true },
      { id: 'c3', title: 'Register for Oregon Business Registry', jurisdiction: 'Oregon', category: 'state-filing', completed: true },
      { id: 'c4', title: 'File Cooperative Annual Report', jurisdiction: 'Oregon', category: 'corporate', completed: false, dueDate: '2026-06-30' },
      { id: 'c5', title: 'Transfer food service permits', jurisdiction: 'Multnomah County', category: 'licensing', completed: false, dueDate: '2026-05-01' },
      { id: 'c6', title: 'Update workers compensation insurance', jurisdiction: 'Oregon', category: 'labor', completed: false, dueDate: '2026-04-30' },
    ],
    blockers: [],
    notes: 'Conversion on track for May closing. Bylaws in final review with attorney. Seller financing terms agreed — Harold taking 30% note over 7 years.',
  },
  {
    id: '2',
    businessName: 'GreenLeaf Landscaping',
    industry: 'Landscaping',
    location: { city: 'Austin', state: 'TX' },
    stage: 'financing',
    ownerName: 'Robert Callahan',
    workerCount: 8,
    estimatedValue: '$850K',
    startDate: '2025-08-01',
    targetCloseDate: '2026-08-15',
    stakeholders: [
      { id: 's6', name: 'Robert Callahan', role: 'owner', email: 'robert@greenleafaustin.com' },
      { id: 's7', name: 'Carlos Mendez', role: 'worker-lead', email: 'carlos@greenleafaustin.com' },
      { id: 's8', name: 'Jennifer Walsh', role: 'attorney', organization: 'Walsh & Associates', email: 'jennifer@walshlaw.com' },
      { id: 's9', name: 'Amy Chen', role: 'developer', organization: 'Texas Co-op Development', email: 'amy@txcoop.org' },
      { id: 's10', name: 'Michael Torres', role: 'lender', organization: 'Seed Commons', email: 'michael@seedcommons.org' },
      { id: 's11', name: 'Linda Park', role: 'advisor', organization: 'Austin SBDC', email: 'linda@austinsbdc.org' },
    ],
    documents: [
      { id: 'd8', title: 'Letter of Intent', type: 'letter-of-intent', status: 'final', date: '2025-09-12' },
      { id: 'd9', title: 'Feasibility Study', type: 'feasibility-report', status: 'final', date: '2025-11-20' },
      { id: 'd10', title: 'Business Valuation', type: 'valuation', status: 'final', date: '2026-01-08' },
      { id: 'd11', title: 'Term Sheet — Seed Commons', type: 'term-sheet', status: 'review', date: '2026-03-15' },
    ],
    compliance: [
      { id: 'c7', title: 'File Certificate of Formation with Texas SOS', jurisdiction: 'Texas', category: 'state-filing', completed: false, dueDate: '2026-06-01' },
      { id: 'c8', title: 'Obtain EIN from IRS', jurisdiction: 'Federal', category: 'tax', completed: true },
      { id: 'c9', title: 'Texas franchise tax registration', jurisdiction: 'Texas', category: 'tax', completed: false, dueDate: '2026-07-01' },
      { id: 'c10', title: 'Transfer landscaping business license', jurisdiction: 'City of Austin', category: 'licensing', completed: false },
      { id: 'c11', title: 'Workers compensation policy update', jurisdiction: 'Texas', category: 'labor', completed: false },
    ],
    blockers: [
      'SBA lender requesting 3 years of audited financials — only 2 years available',
      'State filing delayed pending resolution of outstanding franchise tax issue',
    ],
    notes: 'Robert wants to retire by end of 2026. Workers enthusiastic but financing is the bottleneck. Seed Commons term sheet under review — may need secondary lender for the gap.',
  },
  {
    id: '3',
    businessName: 'Harbor Home Care',
    industry: 'Home Care',
    location: { city: 'Seattle', state: 'WA' },
    stage: 'feasibility',
    ownerName: 'Margaret Liu',
    workerCount: 22,
    estimatedValue: '$2.1M',
    startDate: '2026-01-10',
    targetCloseDate: '2027-06-30',
    stakeholders: [
      { id: 's12', name: 'Margaret Liu', role: 'owner', email: 'margaret@harborhomecare.com' },
      { id: 's13', name: 'Dina Okafor', role: 'worker-lead', email: 'dina@harborhomecare.com' },
      { id: 's14', name: 'Tom Brennan', role: 'developer', organization: 'Northwest Cooperative Development Center', email: 'tom@nwcdc.coop' },
    ],
    documents: [
      { id: 'd12', title: 'Letter of Intent', type: 'letter-of-intent', status: 'final', date: '2026-02-05' },
      { id: 'd13', title: 'Feasibility Study', type: 'feasibility-report', status: 'draft', date: '2026-03-28' },
    ],
    compliance: [
      { id: 'c12', title: 'File Articles with Washington SOS', jurisdiction: 'Washington', category: 'state-filing', completed: false },
      { id: 'c13', title: 'Home care agency license transfer', jurisdiction: 'Washington DSHS', category: 'licensing', completed: false },
      { id: 'c14', title: 'Obtain EIN from IRS', jurisdiction: 'Federal', category: 'tax', completed: false },
    ],
    blockers: [],
    notes: 'City of Seattle has a municipal conversion fund that may cover up to $200K of the acquisition cost. Feasibility study in progress — key question is whether Medicaid reimbursement rates support the debt service. Large worker base (22) makes this a high-impact conversion.',
  },
  {
    id: '4',
    businessName: 'Atlas Print Shop',
    industry: 'Printing & Design',
    location: { city: 'Denver', state: 'CO' },
    stage: 'valuation',
    ownerName: 'Frank Reeves',
    workerCount: 5,
    estimatedValue: '$420K',
    startDate: '2025-11-01',
    targetCloseDate: '2026-10-01',
    stakeholders: [
      { id: 's15', name: 'Frank Reeves', role: 'owner', email: 'frank@atlasprint.com' },
      { id: 's16', name: 'Jade Thompson', role: 'worker-lead', email: 'jade@atlasprint.com' },
      { id: 's17', name: 'Richard Gomez', role: 'attorney', organization: 'Colorado Co-op Law', email: 'richard@cocooplaw.com' },
      { id: 's18', name: 'Nancy Whitfield', role: 'developer', organization: 'Rocky Mountain Employee Ownership Center', email: 'nancy@rmeoc.org' },
    ],
    documents: [
      { id: 'd14', title: 'Letter of Intent', type: 'letter-of-intent', status: 'final', date: '2025-12-15' },
      { id: 'd15', title: 'Feasibility Study', type: 'feasibility-report', status: 'final', date: '2026-02-10' },
      { id: 'd16', title: 'Independent Business Valuation', type: 'valuation', status: 'draft', date: '2026-03-25' },
    ],
    compliance: [
      { id: 'c15', title: 'File Articles with Colorado SOS', jurisdiction: 'Colorado', category: 'state-filing', completed: false },
      { id: 'c16', title: 'Obtain EIN from IRS', jurisdiction: 'Federal', category: 'tax', completed: false },
    ],
    blockers: [
      'Contested valuation — owner values at $520K based on revenue multiple, workers counter at $380K based on asset value. Mediator engaged.',
    ],
    notes: 'Small but profitable shop. Frank has owned it 28 years. Workers are experienced and committed. Valuation gap is the main hurdle — attorney mediating between the two appraisals.',
  },
  {
    id: '5',
    businessName: 'Riverwalk Childcare',
    industry: 'Childcare',
    location: { city: 'Minneapolis', state: 'MN' },
    stage: 'governance-design',
    ownerName: 'Susan Hartley',
    workerCount: 15,
    estimatedValue: '$1.5M',
    startDate: '2025-06-01',
    targetCloseDate: '2026-09-01',
    stakeholders: [
      { id: 's19', name: 'Susan Hartley', role: 'owner', email: 'susan@riverwalkchildcare.com' },
      { id: 's20', name: 'Amara Jackson', role: 'worker-lead', email: 'amara@riverwalkchildcare.com' },
      { id: 's21', name: 'Peter Olson', role: 'attorney', organization: 'Olson Legal', email: 'peter@olsonlegal.com' },
      { id: 's22', name: 'Karen Brightwater', role: 'developer', organization: 'Cooperative Development Services', email: 'karen@cdsus.coop' },
      { id: 's23', name: 'James Wright', role: 'lender', organization: 'Northcountry Cooperative Development Fund', email: 'james@ncdf.coop' },
    ],
    documents: [
      { id: 'd17', title: 'Letter of Intent', type: 'letter-of-intent', status: 'final', date: '2025-07-20' },
      { id: 'd18', title: 'Feasibility Study', type: 'feasibility-report', status: 'final', date: '2025-09-15' },
      { id: 'd19', title: 'Business Valuation', type: 'valuation', status: 'final', date: '2025-11-08' },
      { id: 'd20', title: 'Term Sheet — NCDF', type: 'term-sheet', status: 'final', date: '2026-01-22' },
      { id: 'd21', title: 'Financing Agreement', type: 'financing-agreement', status: 'final', date: '2026-02-28' },
      { id: 'd22', title: 'Draft Bylaws', type: 'bylaws', status: 'draft', date: '2026-03-18' },
    ],
    compliance: [
      { id: 'c17', title: 'File Articles with Minnesota SOS', jurisdiction: 'Minnesota', category: 'state-filing', completed: false, dueDate: '2026-07-01' },
      { id: 'c18', title: 'Obtain EIN from IRS', jurisdiction: 'Federal', category: 'tax', completed: true },
      { id: 'c19', title: 'Transfer childcare facility license', jurisdiction: 'Minnesota DHS', category: 'licensing', completed: false },
      { id: 'c20', title: 'Background check compliance for new entity', jurisdiction: 'Minnesota', category: 'labor', completed: false },
    ],
    blockers: [],
    notes: 'Financing secured through NCDF. Workers now designing their governance structure — debating between equal vote with rotating board vs. departmental representation model. Karen facilitating governance workshops every other week.',
  },
  {
    id: '6',
    businessName: 'Mountain Mechanical',
    industry: 'HVAC Services',
    location: { city: 'Boise', state: 'ID' },
    stage: 'prospect',
    ownerName: 'Gary Stenson',
    workerCount: 6,
    estimatedValue: '$650K',
    startDate: '2026-03-01',
    targetCloseDate: '2027-03-01',
    stakeholders: [
      { id: 's24', name: 'Gary Stenson', role: 'owner', email: 'gary@mountainmech.com' },
      { id: 's25', name: 'Ryan Foster', role: 'worker-lead', email: 'ryan@mountainmech.com' },
    ],
    documents: [],
    compliance: [],
    blockers: [],
    notes: 'Initial inquiry from retiring owner via Idaho SBDC referral. Gary wants to retire in 12-18 months. Workers are interested but no formal engagement yet. Need to schedule initial assessment meeting.',
  },
];

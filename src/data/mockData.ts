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
  { name: 'Rachel Torres', coopName: 'Green Valley Farm Co-op', quote: 'CoOperate made it possible for us to formalize our cooperative in weeks instead of months. The legal templates alone saved us $15,000 in attorney fees.', initials: 'RT', color: '#ca8a04' },
  { name: 'Kwame Asante', coopName: 'TechForward Workers Co-op', quote: 'The governance tools transformed how we make decisions. Every member has a voice, and the voting system keeps us accountable and transparent.', initials: 'KA', color: '#16a34a' },
  { name: 'Mei-Lin Park', coopName: 'Artisan Collective Co-op', quote: 'Profit sharing used to be our biggest source of conflict. Now it\'s automated, fair, and everyone can see exactly how allocations are calculated.', initials: 'MP', color: '#a855f7' },
];

export const stats = {
  coopsLaunched: '2,400+',
  workerOwners: '180K+',
  distributed: '$2.1B',
  retention: '94%',
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

const features = [
  {
    title: 'Legal Templates',
    description: 'Bylaws, operating agreements, and incorporation documents tailored for cooperatives.',
    icon: LegalShieldIcon,
  },
  {
    title: 'Democratic Voting',
    description: 'Structured proposals, quorum tracking, and transparent decision-making for every member.',
    icon: VoteBallotIcon,
  },
  {
    title: 'Profit Sharing',
    description: 'Configure distribution rules, simulate outcomes, and automate fair allocations.',
    icon: ProfitChartIcon,
  },
  {
    title: 'Member Management',
    description: 'Onboarding, role assignment, equity tracking, and membership lifecycle tools.',
    icon: PeopleCircleIcon,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Health scores, engagement metrics, financial trends, and exportable reports.',
    icon: AnalyticsDashIcon,
  },
  {
    title: 'Cooperative Values',
    description: 'Built on the seven cooperative principles. Equity, transparency, and shared ownership.',
    icon: HandshakeIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.heading}>Everything Your Co-op Needs</h2>
        <p style={styles.sub}>
          From formation to daily operations — tools built specifically for worker-owned cooperatives.
        </p>
        <div style={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className="card" style={styles.card}>
              <div style={styles.iconWrap}>
                <f.icon />
              </div>
              <h3 style={styles.cardTitle}>{f.title}</h3>
              <p style={styles.cardDesc}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LegalShieldIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 2L4 7v9c0 7.7 5.1 14.3 12 16 6.9-1.7 12-8.3 12-16V7L16 2z" stroke="#ca8a04" strokeWidth="2" fill="none"/>
      <path d="M11 16l3 3 7-7" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function VoteBallotIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="4" width="20" height="24" rx="2" stroke="#ca8a04" strokeWidth="2"/>
      <path d="M11 10h10M11 15h10M11 20h6" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="23" cy="20" r="4" fill="rgba(202,138,4,0.2)" stroke="#ca8a04" strokeWidth="1.5"/>
      <path d="M21.5 20l1 1 2-2" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ProfitChartIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="18" width="5" height="10" rx="1" fill="rgba(202,138,4,0.3)" stroke="#ca8a04" strokeWidth="1.5"/>
      <rect x="13.5" y="12" width="5" height="16" rx="1" fill="rgba(202,138,4,0.3)" stroke="#ca8a04" strokeWidth="1.5"/>
      <rect x="23" y="6" width="5" height="22" rx="1" fill="rgba(202,138,4,0.3)" stroke="#ca8a04" strokeWidth="1.5"/>
      <path d="M2 4v24h28" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

function PeopleCircleIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="#ca8a04" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="12" r="4" stroke="#ca8a04" strokeWidth="1.5"/>
      <path d="M9 24c0-3.9 3.1-6 7-6s7 2.1 7 6" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AnalyticsDashIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="3" stroke="#ca8a04" strokeWidth="2"/>
      <path d="M8 22l5-5 4 3 7-9" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="8" cy="22" r="1.5" fill="#ca8a04"/>
      <circle cx="13" cy="17" r="1.5" fill="#ca8a04"/>
      <circle cx="17" cy="20" r="1.5" fill="#ca8a04"/>
      <circle cx="24" cy="11" r="1.5" fill="#ca8a04"/>
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M2 16l6-6 4 2 4-4 4 4 4-2 6 6" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 18l4 4 4-2 4 2 4-4" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22l2 2M16 20l2 2" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 32px',
    background: '#12121a',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: 12,
  },
  sub: {
    textAlign: 'center',
    color: '#9898b0',
    fontSize: 16,
    marginBottom: 48,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 24,
  },
  card: {
    padding: 32,
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    background: 'rgba(202, 138, 4, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 600,
    marginBottom: 8,
  },
  cardDesc: {
    color: '#9898b0',
    fontSize: 14,
    lineHeight: 1.6,
  },
};

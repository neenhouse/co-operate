import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/app', label: 'Dashboard', end: true, icon: DashboardIcon },
  { to: '/app/templates', label: 'Templates', end: false, icon: TemplatesIcon },
  { to: '/app/governance', label: 'Governance', end: false, icon: GovernanceIcon },
  { to: '/app/profit-sharing', label: 'Profit Sharing', end: false, icon: ProfitIcon },
  { to: '/app/members', label: 'Members', end: false, icon: MembersIcon },
  { to: '/app/analytics', label: 'Analytics', end: false, icon: AnalyticsIcon },
];

export default function Sidebar() {
  return (
    <aside className="app-sidebar" style={styles.sidebar} aria-label="Application navigation">
      <div style={styles.brand}>
        <div style={styles.logo}>
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <circle cx="24" cy="32" r="14" stroke="#ca8a04" strokeWidth="3" fill="none"/>
            <circle cx="40" cy="32" r="14" stroke="#ca8a04" strokeWidth="3" fill="none"/>
            <circle cx="32" cy="32" r="4" fill="#ca8a04"/>
          </svg>
        </div>
        <span style={styles.brandName}>CoOperate</span>
      </div>
      <div style={styles.coopName}>Sunrise Bakery Co-op</div>
      <nav style={styles.nav} aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `sidebar-nav-link${isActive ? ' active' : ''}`}
          >
            <item.icon />
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div style={styles.footer}>
        <NavLink to="/" style={styles.backLink}>
          <ArrowLeftIcon />
          Back to Home
        </NavLink>
      </div>
    </aside>
  );
}

function DashboardIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="7" height="7" rx="1.5" />
      <rect x="10" y="1" width="7" height="4" rx="1.5" />
      <rect x="1" y="10" width="7" height="4" rx="1.5" />
      <rect x="10" y="7" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function TemplatesIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 1h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z" />
      <path d="M5 5h8M5 9h6M5 13h4" />
    </svg>
  );
}

function GovernanceIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 1L1 5v2h16V5L9 1z" />
      <path d="M3 7v7M7 7v7M11 7v7M15 7v7" />
      <path d="M1 14h16v2H1z" />
    </svg>
  );
}

function ProfitIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="9" r="8" />
      <path d="M9 4v10M6 6.5c0-1 1.5-2 3-2s3 .5 3 2-1.5 2-3 2-3 .5-3 2 1.5 2 3 2 3-1 3-2" />
    </svg>
  );
}

function MembersIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="7" cy="5" r="3" />
      <path d="M1 15c0-3.3 2.7-5 6-5s6 1.7 6 5" />
      <circle cx="13" cy="6" r="2.5" />
      <path d="M14 10c2.2.5 3 2 3 4" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 17V7l4-3 4 5 4-7 4 4v11H1z" />
      <circle cx="5" cy="4" r="1" fill="currentColor" />
      <circle cx="9" cy="9" r="1" fill="currentColor" />
      <circle cx="13" cy="2" r="1" fill="currentColor" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10 3L5 8l5 5" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  sidebar: {
    width: 260,
    minHeight: '100dvh',
    background: '#12121a',
    borderRight: '1px solid #2a2a3e',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 0',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    zIndex: 100,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '0 20px',
    marginBottom: 4,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  brandName: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 18,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  coopName: {
    padding: '8px 20px 20px',
    fontSize: 13,
    color: '#9898b0',
    borderBottom: '1px solid #2a2a3e',
    marginBottom: 8,
  },
  nav: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    padding: '8px 12px',
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    borderRadius: 8,
    color: '#9898b0',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
    transition: 'all 150ms ease',
    borderLeft: '3px solid transparent',
  },
  navLinkActive: {
    color: '#ca8a04',
    background: 'rgba(202, 138, 4, 0.08)',
    borderLeftColor: '#ca8a04',
  },
  footer: {
    padding: '16px 20px',
    borderTop: '1px solid #2a2a3e',
  },
  backLink: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    color: '#5e5e7a',
    textDecoration: 'none',
    fontSize: 13,
  },
};

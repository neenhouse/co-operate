import { Outlet, Link } from 'react-router-dom';

export default function LandingLayout() {
  return (
    <div>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <Link to="/" style={styles.brand}>
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
              <circle cx="24" cy="32" r="14" stroke="#ca8a04" strokeWidth="3" fill="none"/>
              <circle cx="40" cy="32" r="14" stroke="#ca8a04" strokeWidth="3" fill="none"/>
              <circle cx="32" cy="32" r="4" fill="#ca8a04"/>
            </svg>
            <span style={styles.brandName}>CoOperate</span>
          </Link>
          <nav style={styles.nav}>
            <a href="#features" className="landing-nav-link">Features</a>
            <a href="#testimonials" className="landing-nav-link">Testimonials</a>
            <Link to="/app" className="btn btn-primary btn-sm">Launch App</Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerBrand}>
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
              <circle cx="24" cy="32" r="14" stroke="#ca8a04" strokeWidth="3" fill="none"/>
              <circle cx="40" cy="32" r="14" stroke="#ca8a04" strokeWidth="3" fill="none"/>
              <circle cx="32" cy="32" r="4" fill="#ca8a04"/>
            </svg>
            <span style={styles.footerBrandName}>CoOperate</span>
          </div>
          <div style={styles.footerLinks}>
            <a href="#features" className="landing-nav-link">Features</a>
            <a href="#testimonials" className="landing-nav-link">Testimonials</a>
            <Link to="/app" className="landing-nav-link">Dashboard</Link>
          </div>
          <div style={styles.copyright}>
            &copy; 2026 CoOperate. Built for worker-owners, by worker-owners.
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background: 'rgba(10, 10, 15, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #2a2a3e',
  },
  headerInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '14px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none',
  },
  brandName: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 20,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
  },
  navLink: {
    color: '#9898b0',
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
  },
  footer: {
    borderTop: '1px solid #2a2a3e',
    background: '#0a0a0f',
    padding: '48px 32px',
  },
  footerInner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
  },
  footerBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  footerBrandName: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: 16,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  footerLinks: {
    display: 'flex',
    gap: 24,
  },
  footerLink: {
    color: '#5e5e7a',
    textDecoration: 'none',
    fontSize: 14,
  },
  copyright: {
    color: '#5e5e7a',
    fontSize: 13,
  },
};

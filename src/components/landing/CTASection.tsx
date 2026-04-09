import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <div style={styles.card}>
          <h2 style={styles.heading}>Ready to Scale Worker Ownership?</h2>
          <p style={styles.sub}>
            Whether you're managing conversions or running a cooperative, CoOperate is the platform that grows with you.
          </p>
          <div style={styles.ctas}>
            <Link to="/app/pipeline" className="btn btn-primary btn-lg">
              Start Managing Conversions
            </Link>
            <Link to="/app" className="btn btn-ghost btn-lg">
              Explore as a Co-op
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 32px',
    background: '#12121a',
  },
  inner: {
    maxWidth: 800,
    margin: '0 auto',
  },
  card: {
    textAlign: 'center',
    padding: '64px 48px',
    borderRadius: 20,
    border: '1px solid rgba(202,138,4,0.25)',
    background: 'rgba(202,138,4,0.04)',
    boxShadow: '0 0 0 1px rgba(202,138,4,0.06) inset',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: 16,
  },
  sub: {
    color: '#9898b0',
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 32,
  },
  ctas: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
};

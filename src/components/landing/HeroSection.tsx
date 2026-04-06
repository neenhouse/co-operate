import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.inner}>
        <h1 style={styles.headline}>
          <span className="gradient-text">Own Your Work.</span>
          <br />
          Build Together.
        </h1>
        <p style={styles.sub}>
          The all-in-one platform for launching and running worker-owned cooperatives.
          Legal templates, governance tools, profit-sharing automation, and democratic decision-making.
        </p>
        <div style={styles.ctas}>
          <Link to="/app" className="btn btn-primary btn-lg">
            Launch Your Co-op
          </Link>
          <a href="#features" className="btn btn-ghost btn-lg">
            See How It Works
          </a>
        </div>
      </div>
      <div style={styles.glowAmber} />
      <div style={styles.glowGreen} />
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  hero: {
    position: 'relative',
    padding: '160px 32px 100px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 800,
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
  },
  headline: {
    fontSize: '4rem',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 24,
    fontFamily: "'Space Grotesk', sans-serif",
  },
  sub: {
    fontSize: 18,
    color: '#9898b0',
    lineHeight: 1.7,
    maxWidth: 600,
    margin: '0 auto 40px',
  },
  ctas: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  glowAmber: {
    position: 'absolute',
    top: '30%',
    left: '35%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 400,
    background: 'radial-gradient(ellipse, rgba(202,138,4,0.1) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
  glowGreen: {
    position: 'absolute',
    top: '55%',
    left: '65%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 350,
    background: 'radial-gradient(ellipse, rgba(22,163,74,0.07) 0%, transparent 65%)',
    pointerEvents: 'none',
  },
};

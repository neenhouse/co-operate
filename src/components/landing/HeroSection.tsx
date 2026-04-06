import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section style={styles.hero}>
      <div style={styles.layout}>
        {/* Left: text content */}
        <div style={styles.textCol}>
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

        {/* Right: tilted card preview */}
        <div style={styles.cardCol}>
          <div style={styles.cardWrapper}>
            <div style={styles.card}>
              <img
                src="/hero-og.webp"
                alt="CoOperate — worker-owned cooperative platform"
                loading="eager"
                style={styles.cardImage}
              />
              {/* Amber accent border glow */}
              <div style={styles.cardGlow} />
            </div>
            {/* Shadow echo below card */}
            <div style={styles.cardShadow} />
          </div>
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
    overflow: 'hidden',
    maxWidth: 1200,
    margin: '0 auto',
  },
  layout: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64,
    alignItems: 'center',
  },
  textCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardCol: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1200px',
  },
  cardWrapper: {
    position: 'relative',
  },
  card: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    border: '1px solid rgba(202,138,4,0.25)',
    transform: 'rotateY(-8deg) rotateX(3deg)',
    transformStyle: 'preserve-3d',
    boxShadow: '24px 24px 60px rgba(0,0,0,0.6), -4px -4px 24px rgba(202,138,4,0.06)',
    maxWidth: 520,
    width: '100%',
  },
  cardImage: {
    display: 'block',
    width: '100%',
    height: 'auto',
    aspectRatio: '16 / 9',
    objectFit: 'cover',
  },
  cardGlow: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(202,138,4,0.08) 0%, transparent 50%, rgba(22,163,74,0.05) 100%)',
    pointerEvents: 'none',
  },
  cardShadow: {
    position: 'absolute',
    bottom: -20,
    left: '10%',
    right: '10%',
    height: 40,
    background: 'rgba(202,138,4,0.12)',
    filter: 'blur(20px)',
    borderRadius: '50%',
    transform: 'rotateY(-8deg)',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
    fontWeight: 700,
    lineHeight: 1.1,
    marginBottom: 24,
    fontFamily: "'Space Grotesk', sans-serif",
  },
  sub: {
    fontSize: 17,
    color: '#9898b0',
    lineHeight: 1.7,
    maxWidth: 480,
    marginBottom: 40,
  },
  ctas: {
    display: 'flex',
    gap: 16,
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

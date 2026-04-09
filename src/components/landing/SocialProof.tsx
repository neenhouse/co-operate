import { testimonials, stats } from '../../data/mockData';

export default function SocialProof() {
  return (
    <section id="testimonials" style={styles.section}>
      <div style={styles.inner}>
        <h2 style={styles.heading}>Trusted by the Cooperative Ecosystem</h2>
        <div style={styles.statsBar}>
          <StatItem label="Conversions Managed" value={stats.conversionsManaged} />
          <StatItem label="Capital Deployed" value={stats.capitalDeployed} />
          <StatItem label="Intermediaries" value={stats.intermediaries} />
          <StatItem label="Co-op Survival Rate" value={stats.coopSurvival} />
        </div>
        <div style={styles.testimonials}>
          {testimonials.map((t) => (
            <div key={t.name} className="card" style={styles.testimonialCard}>
              <p style={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div style={styles.author}>
                <div style={{ ...styles.avatar, background: t.color }}>{t.initials}</div>
                <div>
                  <div style={styles.authorName}>{t.name}</div>
                  <div style={styles.authorCoop}>{t.coopName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.stat}>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 32px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: 48,
  },
  statsBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: 24,
    marginBottom: 64,
    padding: '32px',
    background: '#12121a',
    borderRadius: 16,
    border: '1px solid #2a2a3e',
  },
  stat: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    color: '#f0f0f5',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#9898b0',
  },
  testimonials: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 24,
  },
  testimonialCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  quote: {
    fontSize: 15,
    lineHeight: 1.7,
    color: '#9898b0',
    marginBottom: 24,
    fontStyle: 'italic',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
    color: '#0a0a0f',
  },
  authorName: {
    fontSize: 14,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  authorCoop: {
    fontSize: 13,
    color: '#5e5e7a',
  },
};

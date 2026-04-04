import { analyticsData } from '../../data/mockData';

export default function HealthMetrics() {
  const { healthScore, governanceParticipation, financialHealth, memberEngagement, growthRate } = analyticsData;

  return (
    <div style={styles.grid}>
      <div className="card" style={styles.healthCard}>
        <h3 style={styles.cardTitle}>Co-op Health Score</h3>
        <div style={styles.scoreWrap}>
          <div style={styles.scoreCircle}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="#252536" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke={healthScore >= 80 ? '#16a34a' : healthScore >= 60 ? '#eab308' : '#ef4444'}
                strokeWidth="8"
                strokeDasharray={`${(healthScore / 100) * 339.3} 339.3`}
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div style={styles.scoreValue}>{healthScore}</div>
          </div>
          <div style={styles.scoreLabel}>
            {healthScore >= 80 ? 'Excellent' : healthScore >= 60 ? 'Good' : 'Needs Attention'}
          </div>
        </div>
      </div>

      <MetricCard label="Governance Participation" value={governanceParticipation} suffix="%" color="#ca8a04" />
      <MetricCard label="Financial Health" value={financialHealth} suffix="%" color="#16a34a" />
      <MetricCard label="Member Engagement" value={memberEngagement} suffix="%" color="#a855f7" />
      <MetricCard label="Growth Rate" value={growthRate} suffix="%" color="#3b82f6" />
    </div>
  );
}

function MetricCard({ label, value, suffix, color }: { label: string; value: number; suffix: string; color: string }) {
  return (
    <div className="card">
      <div style={styles.metricLabel}>{label}</div>
      <div style={{ ...styles.metricValue, color }}>
        {value}{suffix}
      </div>
      <div style={styles.metricBar}>
        <div style={{ ...styles.metricFill, width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 16,
    marginBottom: 24,
  },
  healthCard: {
    gridColumn: 'span 1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 32,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#9898b0',
    marginBottom: 16,
  },
  scoreWrap: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scoreCircle: {
    position: 'relative',
    width: 120,
    height: 120,
  },
  scoreValue: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 32,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    color: '#f0f0f5',
  },
  scoreLabel: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 500,
    color: '#16a34a',
  },
  metricLabel: {
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 8,
  },
  metricValue: {
    fontSize: 28,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    marginBottom: 12,
  },
  metricBar: {
    height: 6,
    borderRadius: 3,
    background: '#252536',
  },
  metricFill: {
    height: '100%',
    borderRadius: 3,
    transition: 'width 300ms ease',
  },
};

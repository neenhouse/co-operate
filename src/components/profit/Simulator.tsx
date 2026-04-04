import { distributions } from '../../data/mockData';

export default function Simulator() {
  return (
    <div>
      <div className="card" style={styles.currentPeriod}>
        <h3 style={styles.title}>Current Period</h3>
        <div style={styles.periodGrid}>
          <div style={styles.periodStat}>
            <div style={styles.periodValue}>$42,800</div>
            <div style={styles.periodLabel}>Available Surplus</div>
          </div>
          <div style={styles.periodStat}>
            <div style={styles.periodValue}>22</div>
            <div style={styles.periodLabel}>Eligible Members</div>
          </div>
          <div style={styles.periodStat}>
            <div style={styles.periodValue}>Q1 2026</div>
            <div style={styles.periodLabel}>Period</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 20 }}>
        <h3 style={styles.title}>Distribution History</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Total</th>
              <th style={styles.th}>Method</th>
              <th style={styles.th}>Members</th>
            </tr>
          </thead>
          <tbody>
            {distributions.map((d) => (
              <tr key={d.id}>
                <td style={styles.td}>
                  {new Date(d.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </td>
                <td style={{ ...styles.td, fontFamily: "'JetBrains Mono', monospace", color: '#16a34a' }}>
                  ${d.totalAmount.toLocaleString()}
                </td>
                <td style={styles.td}>
                  <span className="badge badge-gold">{d.rule}</span>
                </td>
                <td style={styles.td}>{d.memberCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  currentPeriod: {
    background: 'linear-gradient(135deg, rgba(202,138,4,0.08) 0%, rgba(22,163,74,0.05) 100%)',
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 16,
  },
  periodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 16,
  },
  periodStat: {
    textAlign: 'center',
    padding: 16,
    background: 'rgba(0,0,0,0.2)',
    borderRadius: 8,
  },
  periodValue: {
    fontSize: 22,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    color: '#ca8a04',
    marginBottom: 4,
  },
  periodLabel: {
    fontSize: 12,
    color: '#9898b0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '10px 12px',
    fontSize: 12,
    fontWeight: 500,
    color: '#5e5e7a',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid #2a2a3e',
  },
  td: {
    padding: '12px',
    fontSize: 13,
    color: '#f0f0f5',
    borderBottom: '1px solid #2a2a3e',
  },
};

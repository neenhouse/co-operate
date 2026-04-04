import { analyticsData, monthlyFinancials } from '../../data/mockData';

export default function EngagementChart() {
  const maxRevenue = Math.max(...monthlyFinancials.map((m) => m.revenue));

  return (
    <div style={styles.wrapper}>
      <div className="card" style={styles.chartCard}>
        <h3 style={styles.title}>Financial Overview (Last 6 Months)</h3>
        <div style={styles.chart}>
          {monthlyFinancials.map((m) => (
            <div key={m.month} style={styles.chartCol}>
              <div style={styles.bars}>
                <div
                  style={{
                    ...styles.bar,
                    height: `${(m.revenue / maxRevenue) * 100}%`,
                    background: 'rgba(202, 138, 4, 0.6)',
                  }}
                  title={`Revenue: $${m.revenue.toLocaleString()}`}
                />
                <div
                  style={{
                    ...styles.bar,
                    height: `${(m.expenses / maxRevenue) * 100}%`,
                    background: 'rgba(94, 94, 122, 0.4)',
                  }}
                  title={`Expenses: $${m.expenses.toLocaleString()}`}
                />
                <div
                  style={{
                    ...styles.bar,
                    height: `${(m.surplus / maxRevenue) * 100}%`,
                    background: 'rgba(22, 163, 74, 0.6)',
                  }}
                  title={`Surplus: $${m.surplus.toLocaleString()}`}
                />
              </div>
              <div style={styles.chartLabel}>{m.month.split(' ')[0]}</div>
            </div>
          ))}
        </div>
        <div style={styles.legend}>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: 'rgba(202, 138, 4, 0.6)' }} />Revenue</span>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: 'rgba(94, 94, 122, 0.4)' }} />Expenses</span>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: 'rgba(22, 163, 74, 0.6)' }} />Surplus</span>
        </div>
      </div>

      <div className="card">
        <h3 style={styles.title}>Engagement Breakdown</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Category</th>
              <th style={styles.th}>Score</th>
              <th style={styles.th}>Trend</th>
            </tr>
          </thead>
          <tbody>
            {analyticsData.engagementBreakdown.map((e) => (
              <tr key={e.category}>
                <td style={styles.td}>{e.category}</td>
                <td style={styles.td}>
                  <div style={styles.scoreRow}>
                    <div style={styles.scoreBar}>
                      <div style={{ ...styles.scoreFill, width: `${e.score}%` }} />
                    </div>
                    <span style={styles.scoreNum}>{e.score}%</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <span style={{ color: e.trend === 'up' ? '#16a34a' : e.trend === 'down' ? '#ef4444' : '#9898b0' }}>
                    {e.trend === 'up' ? '↑' : e.trend === 'down' ? '↓' : '→'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  chartCard: {},
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 24,
  },
  chart: {
    display: 'flex',
    gap: 16,
    height: 200,
    alignItems: 'flex-end',
    padding: '0 8px',
    marginBottom: 16,
  },
  chartCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  bars: {
    display: 'flex',
    gap: 4,
    alignItems: 'flex-end',
    flex: 1,
    width: '100%',
  },
  bar: {
    flex: 1,
    borderRadius: '3px 3px 0 0',
    minHeight: 4,
    transition: 'height 300ms ease',
  },
  chartLabel: {
    fontSize: 11,
    color: '#5e5e7a',
    marginTop: 8,
  },
  legend: {
    display: 'flex',
    gap: 20,
    justifyContent: 'center',
    fontSize: 12,
    color: '#9898b0',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 2,
    display: 'inline-block',
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
    padding: '14px 12px',
    fontSize: 13,
    color: '#f0f0f5',
    borderBottom: '1px solid #2a2a3e',
  },
  scoreRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  scoreBar: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    background: '#252536',
  },
  scoreFill: {
    height: '100%',
    borderRadius: 3,
    background: '#ca8a04',
  },
  scoreNum: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    width: 36,
  },
};

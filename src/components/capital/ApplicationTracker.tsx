import { capitalApplications, deals, lenders } from '../../data/mockData';
import type { CapitalApplication } from '../../data/mockData';

const STATUS_CONFIG: Record<CapitalApplication['status'], { label: string; color: string; bg: string }> = {
  'draft': { label: 'Draft', color: '#5e5e7a', bg: 'rgba(94, 94, 122, 0.1)' },
  'submitted': { label: 'Submitted', color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
  'under-review': { label: 'Under Review', color: '#ca8a04', bg: 'rgba(202, 138, 4, 0.1)' },
  'approved': { label: 'Approved', color: '#16a34a', bg: 'rgba(22, 163, 74, 0.1)' },
  'funded': { label: 'Funded', color: '#16a34a', bg: 'rgba(22, 163, 74, 0.15)' },
  'declined': { label: 'Declined', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
};

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function ApplicationTracker() {
  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.heading}>Applications</h2>
        <span style={styles.count}>{capitalApplications.length} active</span>
      </div>
      <div style={styles.tableWrap}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Business</th>
              <th style={styles.th}>Lender</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Submitted</th>
              <th style={styles.th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {capitalApplications.map((app) => {
              const deal = deals.find((d) => d.id === app.dealId);
              const lender = lenders.find((l) => l.id === app.lenderId);
              const statusConfig = STATUS_CONFIG[app.status];

              return (
                <tr key={app.id} style={styles.tr}>
                  <td style={styles.td}>
                    <span style={styles.businessName}>{deal?.businessName ?? 'Unknown'}</span>
                  </td>
                  <td style={styles.td}>{lender?.name ?? 'Unknown'}</td>
                  <td style={styles.td}>{app.amount}</td>
                  <td style={styles.td}>
                    <span
                      style={{
                        ...styles.statusBadge,
                        color: statusConfig.color,
                        background: statusConfig.bg,
                      }}
                    >
                      {statusConfig.label}
                    </span>
                  </td>
                  <td style={styles.td}>{app.submittedDate ? formatDate(app.submittedDate) : '—'}</td>
                  <td style={{ ...styles.td, ...styles.notesCell }}>{app.notes ?? '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: 600,
    color: '#f0f0f5',
    margin: 0,
    fontFamily: "'Space Grotesk', sans-serif",
  },
  count: {
    fontSize: 12,
    color: '#5e5e7a',
    background: '#1e1e2e',
    borderRadius: 10,
    padding: '2px 8px',
  },
  tableWrap: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    padding: '10px 12px',
    fontSize: 11,
    fontWeight: 600,
    color: '#5e5e7a',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    borderBottom: '1px solid #2a2a3e',
  },
  tr: {
    borderBottom: '1px solid #1e1e2e',
  },
  td: {
    padding: '12px 12px',
    fontSize: 13,
    color: '#9898b0',
    verticalAlign: 'top',
  },
  businessName: {
    color: '#f0f0f5',
    fontWeight: 500,
  },
  statusBadge: {
    fontSize: 11,
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 4,
    whiteSpace: 'nowrap',
  },
  notesCell: {
    maxWidth: 260,
    fontSize: 12,
    lineHeight: 1.4,
  },
};

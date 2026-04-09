import { useNavigate } from 'react-router-dom';
import type { Deal } from '../../data/mockData';

interface DealCardProps {
  deal: Deal;
}

export default function DealCard({ deal }: DealCardProps) {
  const navigate = useNavigate();
  const hasBlockers = deal.blockers.length > 0;

  return (
    <button
      type="button"
      style={styles.card}
      onClick={() => navigate(`/app/pipeline/${deal.id}`)}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3a3a52';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#2a2a3e';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={styles.header}>
        <span style={styles.name}>{deal.businessName}</span>
        {hasBlockers && <span style={styles.blockerDot} title="Has blockers" />}
      </div>
      <span style={styles.industry}>{deal.industry}</span>
      <div style={styles.details}>
        <span style={styles.detail}>
          {deal.location.city}, {deal.location.state}
        </span>
        <span style={styles.detail}>{deal.workerCount} workers</span>
      </div>
      <div style={styles.footer}>
        <span style={styles.value}>{deal.estimatedValue}</span>
        <span style={styles.date}>Close: {formatDate(deal.targetCloseDate)}</span>
      </div>
    </button>
  );
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: '#16161f',
    border: '1px solid #2a2a3e',
    borderRadius: 10,
    padding: 14,
    cursor: 'pointer',
    transition: 'all 150ms ease',
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    textAlign: 'left',
    width: '100%',
    font: 'inherit',
    color: 'inherit',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  blockerDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#ef4444',
    flexShrink: 0,
  },
  industry: {
    fontSize: 11,
    color: '#ca8a04',
    background: 'rgba(202, 138, 4, 0.1)',
    padding: '2px 8px',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  detail: {
    fontSize: 12,
    color: '#9898b0',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    paddingTop: 8,
    borderTop: '1px solid #2a2a3e',
  },
  value: {
    fontSize: 13,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  date: {
    fontSize: 11,
    color: '#5e5e7a',
  },
};

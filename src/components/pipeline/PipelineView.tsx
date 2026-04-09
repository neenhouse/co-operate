import { useState } from 'react';
import { deals, DEAL_STAGES } from '../../data/mockData';
import type { Deal, DealStage } from '../../data/mockData';
import DealCard from './DealCard';

const STAGE_COLORS: Record<DealStage, string> = {
  'prospect': '#64748b',
  'feasibility': '#3b82f6',
  'valuation': '#3b82f6',
  'financing': '#ca8a04',
  'legal': '#ca8a04',
  'governance-design': '#16a34a',
  'closing': '#16a34a',
  'post-conversion': '#ca8a04',
};

export default function PipelineView() {
  const [viewMode, setViewMode] = useState<'board' | 'list'>('board');

  const dealsByStage = DEAL_STAGES.map((stage) => ({
    ...stage,
    deals: deals.filter((d) => d.stage === stage.key),
  }));

  return (
    <div>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Conversion Pipeline</h1>
          <p style={styles.subtitle}>{deals.length} active conversions</p>
        </div>
        <div style={styles.viewToggle}>
          <button
            type="button"
            style={{
              ...styles.toggleBtn,
              ...(viewMode === 'board' ? styles.toggleActive : {}),
            }}
            onClick={() => setViewMode('board')}
          >
            <BoardIcon />
            Board
          </button>
          <button
            type="button"
            style={{
              ...styles.toggleBtn,
              ...(viewMode === 'list' ? styles.toggleActive : {}),
            }}
            onClick={() => setViewMode('list')}
          >
            <ListIcon />
            List
          </button>
        </div>
      </div>

      {viewMode === 'board' ? (
        <BoardView stages={dealsByStage} />
      ) : (
        <ListView deals={deals} />
      )}
    </div>
  );
}

function BoardView({ stages }: { stages: { key: DealStage; label: string; deals: Deal[] }[] }) {
  return (
    <div style={styles.board}>
      {stages.map((stage) => (
        <div key={stage.key} style={styles.column}>
          <div style={styles.columnHeader}>
            <span
              style={{
                ...styles.stageDot,
                background: STAGE_COLORS[stage.key],
              }}
            />
            <span style={styles.columnTitle}>{stage.label}</span>
            <span style={styles.count}>{stage.deals.length}</span>
          </div>
          <div style={styles.columnBody}>
            {stage.deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ListView({ deals: allDeals }: { deals: Deal[] }) {
  const sorted = [...allDeals].sort((a, b) => {
    const stageOrder = DEAL_STAGES.map((s) => s.key);
    return stageOrder.indexOf(a.stage) - stageOrder.indexOf(b.stage);
  });

  return (
    <div style={styles.tableWrap}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Business</th>
            <th style={styles.th}>Stage</th>
            <th style={styles.th}>Location</th>
            <th style={styles.th}>Workers</th>
            <th style={styles.th}>Est. Value</th>
            <th style={styles.th}>Target Close</th>
            <th style={styles.th}>Blockers</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((deal) => {
            const stageInfo = DEAL_STAGES.find((s) => s.key === deal.stage);
            return (
              <tr key={deal.id} style={styles.tr}>
                <td style={styles.td}>
                  <a href={`/app/pipeline/${deal.id}`} style={styles.dealLink}>
                    {deal.businessName}
                  </a>
                </td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.stageBadge,
                      borderColor: STAGE_COLORS[deal.stage],
                      color: STAGE_COLORS[deal.stage],
                    }}
                  >
                    {stageInfo?.shortLabel}
                  </span>
                </td>
                <td style={styles.td}>
                  {deal.location.city}, {deal.location.state}
                </td>
                <td style={styles.td}>{deal.workerCount}</td>
                <td style={styles.td}>{deal.estimatedValue}</td>
                <td style={styles.td}>{deal.targetCloseDate}</td>
                <td style={styles.td}>
                  {deal.blockers.length > 0 ? (
                    <span style={styles.blockerBadge}>{deal.blockers.length}</span>
                  ) : (
                    <span style={styles.clearBadge}>Clear</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function BoardIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="1" width="3.5" height="12" rx="1" />
      <rect x="5.25" y="1" width="3.5" height="8" rx="1" />
      <rect x="9.5" y="1" width="3.5" height="10" rx="1" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 3h12M1 7h12M1 11h12" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#f0f0f5',
    fontFamily: "'Space Grotesk', sans-serif",
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    color: '#9898b0',
    margin: '4px 0 0',
  },
  viewToggle: {
    display: 'flex',
    gap: 2,
    background: '#12121a',
    borderRadius: 8,
    padding: 2,
    border: '1px solid #2a2a3e',
  },
  toggleBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 12px',
    borderRadius: 6,
    border: 'none',
    background: 'transparent',
    color: '#5e5e7a',
    fontSize: 13,
    cursor: 'pointer',
    font: 'inherit',
    transition: 'all 150ms ease',
  },
  toggleActive: {
    background: '#1e1e2e',
    color: '#f0f0f5',
  },
  // Board view
  board: {
    display: 'flex',
    gap: 12,
    overflowX: 'auto',
    paddingBottom: 16,
  },
  column: {
    minWidth: 220,
    maxWidth: 260,
    flexShrink: 0,
  },
  columnHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '8px 4px',
    marginBottom: 8,
  },
  stageDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    flexShrink: 0,
  },
  columnTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: '#9898b0',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  count: {
    fontSize: 11,
    color: '#5e5e7a',
    background: '#1e1e2e',
    borderRadius: 10,
    padding: '1px 7px',
    marginLeft: 'auto',
  },
  columnBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  // List view
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
  },
  dealLink: {
    color: '#f0f0f5',
    textDecoration: 'none',
    fontWeight: 500,
  },
  stageBadge: {
    fontSize: 11,
    padding: '2px 8px',
    borderRadius: 4,
    border: '1px solid',
  },
  blockerBadge: {
    fontSize: 11,
    color: '#ef4444',
    background: 'rgba(239, 68, 68, 0.1)',
    padding: '2px 8px',
    borderRadius: 4,
  },
  clearBadge: {
    fontSize: 11,
    color: '#16a34a',
  },
};

import type { Lender } from '../../data/mockData';
import { deals } from '../../data/mockData';
import EligibilityBadge from './EligibilityBadge';
import { getEligibility } from './eligibility';
import type { EligibilityLevel } from './eligibility';

const LENDER_TYPE_CONFIG: Record<Lender['type'], { label: string; color: string }> = {
  'cdfi': { label: 'CDFI', color: '#16a34a' },
  'cooperative-fund': { label: 'Co-op Fund', color: '#a855f7' },
  'sba': { label: 'SBA', color: '#3b82f6' },
  'state-program': { label: 'State Program', color: '#ca8a04' },
  'credit-union': { label: 'Credit Union', color: '#06b6d4' },
};

function formatDealRange(min: number, max: number): string {
  const fmt = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
    return `$${n}`;
  };
  return `${fmt(min)} – ${fmt(max)}`;
}

function formatStates(states: string[] | 'national'): string {
  if (states === 'national') return 'National';
  return states.join(', ');
}

interface LenderCardProps {
  lender: Lender;
}

export default function LenderCard({ lender }: LenderCardProps) {
  const typeConfig = LENDER_TYPE_CONFIG[lender.type];
  const matchCounts = deals.reduce(
    (acc, deal) => {
      const level = getEligibility(deal, lender);
      acc[level]++;
      return acc;
    },
    { match: 0, partial: 0, 'no-match': 0 } as Record<EligibilityLevel, number>,
  );

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#3a3a52';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#2a2a3e';
      }}
    >
      <div style={styles.header}>
        <h3 style={styles.name}>{lender.name}</h3>
        <span
          style={{
            ...styles.typeBadge,
            color: typeConfig.color,
            borderColor: typeConfig.color,
          }}
        >
          {typeConfig.label}
        </span>
      </div>

      <p style={styles.description}>{lender.description}</p>

      <div style={styles.details}>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Deal Range</span>
          <span style={styles.detailValue}>{formatDealRange(lender.minDeal, lender.maxDeal)}</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Coverage</span>
          <span style={styles.detailValue}>{formatStates(lender.states)}</span>
        </div>
        <div style={styles.detailRow}>
          <span style={styles.detailLabel}>Rates</span>
          <span style={styles.detailValue}>{lender.interestRange}</span>
        </div>
      </div>

      <div style={styles.footer}>
        <span style={styles.matchLabel}>Pipeline matches:</span>
        <div style={styles.matchBadges}>
          {matchCounts.match > 0 && (
            <span style={styles.matchCount}>
              <EligibilityBadge level="match" /> {matchCounts.match}
            </span>
          )}
          {matchCounts.partial > 0 && (
            <span style={styles.matchCount}>
              <EligibilityBadge level="partial" /> {matchCounts.partial}
            </span>
          )}
          {matchCounts.match === 0 && matchCounts.partial === 0 && (
            <span style={styles.matchCount}>
              <EligibilityBadge level="no-match" /> 0
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    background: '#16161f',
    border: '1px solid #2a2a3e',
    borderRadius: 10,
    padding: 18,
    transition: 'border-color 150ms ease',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: 600,
    color: '#f0f0f5',
    margin: 0,
    lineHeight: 1.3,
  },
  typeBadge: {
    fontSize: 10,
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 4,
    border: '1px solid',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.03em',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  },
  description: {
    fontSize: 13,
    color: '#9898b0',
    lineHeight: 1.5,
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 12,
    color: '#5e5e7a',
  },
  detailValue: {
    fontSize: 12,
    color: '#9898b0',
    fontWeight: 500,
  },
  footer: {
    paddingTop: 10,
    borderTop: '1px solid #2a2a3e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  matchLabel: {
    fontSize: 11,
    color: '#5e5e7a',
  },
  matchBadges: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
  },
  matchCount: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 12,
    color: '#9898b0',
  },
};

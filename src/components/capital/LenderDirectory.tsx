import { useState } from 'react';
import type { Lender } from '../../data/mockData';
import { lenders } from '../../data/mockData';
import LenderCard from './LenderCard';

type LenderFilter = 'all' | Lender['type'];

const FILTER_OPTIONS: { value: LenderFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'cdfi', label: 'CDFI' },
  { value: 'cooperative-fund', label: 'Co-op Fund' },
  { value: 'sba', label: 'SBA' },
  { value: 'state-program', label: 'State Program' },
  { value: 'credit-union', label: 'Credit Union' },
];

export default function LenderDirectory() {
  const [filter, setFilter] = useState<LenderFilter>('all');

  const filtered = filter === 'all' ? lenders : lenders.filter((l) => l.type === filter);

  return (
    <div>
      <div style={styles.header}>
        <h2 style={styles.heading}>Lender Directory</h2>
        <span style={styles.count}>{filtered.length} lenders</span>
      </div>
      <div style={styles.filters}>
        {FILTER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            style={{
              ...styles.filterBtn,
              ...(filter === opt.value ? styles.filterActive : {}),
            }}
            onClick={() => setFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div style={styles.grid}>
        {filtered.map((lender) => (
          <LenderCard key={lender.id} lender={lender} />
        ))}
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
  filters: {
    display: 'flex',
    gap: 4,
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  filterBtn: {
    padding: '6px 12px',
    borderRadius: 6,
    border: '1px solid #2a2a3e',
    background: 'transparent',
    color: '#5e5e7a',
    fontSize: 12,
    cursor: 'pointer',
    font: 'inherit',
    transition: 'all 150ms ease',
  },
  filterActive: {
    background: '#1e1e2e',
    color: '#f0f0f5',
    borderColor: '#3a3a52',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 14,
  },
};

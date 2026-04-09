import type { DealDocument } from '../../data/mockData';

const STATUS_STYLES: Record<DealDocument['status'], { color: string; bg: string }> = {
  draft: { color: '#9898b0', bg: 'rgba(152, 152, 176, 0.1)' },
  review: { color: '#ca8a04', bg: 'rgba(202, 138, 4, 0.1)' },
  final: { color: '#16a34a', bg: 'rgba(22, 163, 106, 0.1)' },
};

const TYPE_LABELS: Record<DealDocument['type'], string> = {
  'letter-of-intent': 'Letter of Intent',
  'feasibility-report': 'Feasibility Report',
  'term-sheet': 'Term Sheet',
  'valuation': 'Valuation',
  'articles': 'Articles',
  'bylaws': 'Bylaws',
  'financing-agreement': 'Financing Agreement',
  'other': 'Other',
};

interface DocumentListProps {
  documents: DealDocument[];
}

export default function DocumentList({ documents }: DocumentListProps) {
  if (documents.length === 0) {
    return <p style={styles.empty}>No documents yet.</p>;
  }

  return (
    <div style={styles.list}>
      {documents.map((doc) => {
        const status = STATUS_STYLES[doc.status];
        return (
          <div key={doc.id} style={styles.row}>
            <DocIcon />
            <div style={styles.info}>
              <span style={styles.title}>{doc.title}</span>
              <span style={styles.type}>{TYPE_LABELS[doc.type]}</span>
            </div>
            <span
              style={{
                ...styles.badge,
                color: status.color,
                background: status.bg,
              }}
            >
              {doc.status}
            </span>
            <span style={styles.date}>{doc.date}</span>
          </div>
        );
      })}
    </div>
  );
}

function DocIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#5e5e7a" strokeWidth="1.2">
      <path d="M4 1h6l4 4v10H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
      <path d="M10 1v4h4" />
      <path d="M6 8h5M6 11h3" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '10px 12px',
    background: '#16161f',
    borderRadius: 8,
    border: '1px solid #2a2a3e',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: 500,
    color: '#f0f0f5',
  },
  type: {
    fontSize: 11,
    color: '#5e5e7a',
  },
  badge: {
    fontSize: 11,
    padding: '2px 8px',
    borderRadius: 4,
    textTransform: 'capitalize' as const,
  },
  date: {
    fontSize: 11,
    color: '#5e5e7a',
    minWidth: 80,
    textAlign: 'right',
  },
  empty: {
    color: '#5e5e7a',
    fontSize: 13,
    padding: 20,
    textAlign: 'center',
  },
};

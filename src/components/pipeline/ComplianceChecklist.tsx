import type { ComplianceItem } from '../../data/mockData';

const CATEGORY_LABELS: Record<ComplianceItem['category'], string> = {
  'state-filing': 'State Filings',
  'tax': 'Tax',
  'licensing': 'Licensing',
  'labor': 'Labor',
  'corporate': 'Corporate',
};

interface ComplianceChecklistProps {
  items: ComplianceItem[];
}

export default function ComplianceChecklist({ items }: ComplianceChecklistProps) {
  if (items.length === 0) {
    return <p style={styles.empty}>No compliance items tracked yet.</p>;
  }

  const grouped = items.reduce<Record<string, ComplianceItem[]>>((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const completedCount = items.filter((i) => i.completed).length;

  return (
    <div>
      <div style={styles.summary}>
        <span style={styles.summaryText}>
          {completedCount} of {items.length} complete
        </span>
        <div style={styles.progressBar}>
          <div
            style={{
              ...styles.progressFill,
              width: `${(completedCount / items.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {Object.entries(grouped).map(([category, categoryItems]) => (
        <div key={category} style={styles.group}>
          <h4 style={styles.groupTitle}>
            {CATEGORY_LABELS[category as ComplianceItem['category']] || category}
          </h4>
          {categoryItems.map((item) => (
            <label key={item.id} style={styles.item}>
              <input
                type="checkbox"
                checked={item.completed}
                readOnly
                style={styles.checkbox}
              />
              <div style={styles.itemInfo}>
                <span
                  style={{
                    ...styles.itemTitle,
                    ...(item.completed ? styles.itemCompleted : {}),
                  }}
                >
                  {item.title}
                </span>
                <span style={styles.jurisdiction}>{item.jurisdiction}</span>
              </div>
              {item.dueDate && (
                <span style={styles.dueDate}>Due: {item.dueDate}</span>
              )}
            </label>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  summary: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 13,
    color: '#9898b0',
    whiteSpace: 'nowrap',
  },
  progressBar: {
    flex: 1,
    height: 6,
    background: '#1e1e2e',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    background: '#16a34a',
    borderRadius: 3,
    transition: 'width 300ms ease',
  },
  group: {
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 11,
    fontWeight: 600,
    color: '#5e5e7a',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    margin: '0 0 8px',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '8px 10px',
    borderRadius: 6,
    cursor: 'default',
  },
  checkbox: {
    accentColor: '#16a34a',
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    flex: 1,
  },
  itemTitle: {
    fontSize: 13,
    color: '#f0f0f5',
  },
  itemCompleted: {
    color: '#5e5e7a',
    textDecoration: 'line-through',
  },
  jurisdiction: {
    fontSize: 11,
    color: '#5e5e7a',
  },
  dueDate: {
    fontSize: 11,
    color: '#ca8a04',
    whiteSpace: 'nowrap',
  },
  empty: {
    color: '#5e5e7a',
    fontSize: 13,
    padding: 20,
    textAlign: 'center',
  },
};

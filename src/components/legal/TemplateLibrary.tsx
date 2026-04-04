import { useState } from 'react';
import { templates } from '../../data/mockData';
import TemplatePreview from './TemplatePreview';

const categories = [
  { value: 'all', label: 'All Templates' },
  { value: 'bylaws', label: 'Bylaws' },
  { value: 'operating', label: 'Operating Agreements' },
  { value: 'articles', label: 'Articles of Incorporation' },
  { value: 'member', label: 'Member Agreements' },
  { value: 'board', label: 'Board Resolutions' },
];

const categoryLabels: Record<string, string> = {
  bylaws: 'Bylaws',
  operating: 'Operating Agreement',
  articles: 'Articles of Incorporation',
  member: 'Member Agreement',
  board: 'Board Resolution',
};

export default function TemplateLibrary() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [previewId, setPreviewId] = useState<string | null>(null);

  const filtered = templates.filter((t) => {
    if (filter !== 'all' && t.category !== filter) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const previewTemplate = previewId ? templates.find((t) => t.id === previewId) : null;

  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>Legal Templates</h1>
        <div style={styles.controls}>
          <input
            type="text"
            placeholder="Search templates..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.search}
          />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} style={styles.select}>
            {categories.map((c) => (
              <option key={c.value} value={c.value}>{c.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={styles.grid} data-testid="template-grid">
        {filtered.map((t) => (
          <div key={t.id} className="card" style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.iconWrap}>
                <TemplateIcon />
              </div>
              <span className="badge badge-gold">{categoryLabels[t.category]}</span>
            </div>
            <h3 style={styles.cardTitle}>{t.title}</h3>
            <p style={styles.cardDesc}>{t.description}</p>
            <div style={styles.cardFooter}>
              <div style={styles.popularity}>
                <PopularityIcon />
                <span>{t.popularity}% popular</span>
              </div>
              <button className="btn btn-primary btn-sm" onClick={() => setPreviewId(t.id)}>
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>

      {previewTemplate && (
        <TemplatePreview template={previewTemplate} onClose={() => setPreviewId(null)} />
      )}
    </div>
  );
}

function TemplateIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#ca8a04" strokeWidth="1.5">
      <rect x="3" y="1" width="14" height="18" rx="2" />
      <path d="M7 5h6M7 9h6M7 13h4" />
    </svg>
  );
}

function PopularityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M7 1l1.8 3.6L13 5.3l-3 2.9.7 4.1L7 10.4 3.3 12.3 4 8.2 1 5.3l4.2-.7L7 1z" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    flexWrap: 'wrap',
    gap: 16,
  },
  title: {
    fontSize: '1.75rem',
  },
  controls: {
    display: 'flex',
    gap: 12,
  },
  search: {
    width: 220,
  },
  select: {
    width: 180,
    cursor: 'pointer',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: 20,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: 'rgba(202, 138, 4, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 13,
    color: '#9898b0',
    lineHeight: 1.6,
    flex: 1,
    marginBottom: 16,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popularity: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 12,
    color: '#5e5e7a',
  },
};

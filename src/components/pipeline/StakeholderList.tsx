import type { Stakeholder } from '../../data/mockData';

const ROLE_LABELS: Record<Stakeholder['role'], string> = {
  owner: 'Business Owner',
  'worker-lead': 'Worker Lead',
  attorney: 'Attorney',
  lender: 'Lender',
  developer: 'Co-op Developer',
  advisor: 'Advisor',
};

const ROLE_COLORS: Record<Stakeholder['role'], string> = {
  owner: '#f97316',
  'worker-lead': '#3b82f6',
  attorney: '#a855f7',
  lender: '#16a34a',
  developer: '#ca8a04',
  advisor: '#06b6d4',
};

interface StakeholderListProps {
  stakeholders: Stakeholder[];
}

export default function StakeholderList({ stakeholders }: StakeholderListProps) {
  if (stakeholders.length === 0) {
    return <p style={styles.empty}>No stakeholders assigned yet.</p>;
  }

  return (
    <div style={styles.list}>
      {stakeholders.map((s) => (
        <div key={s.id} style={styles.card}>
          <div
            style={{
              ...styles.avatar,
              background: `${ROLE_COLORS[s.role]}20`,
              color: ROLE_COLORS[s.role],
            }}
          >
            {s.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <div style={styles.info}>
            <span style={styles.name}>{s.name}</span>
            <span style={styles.role}>{ROLE_LABELS[s.role]}</span>
            {s.organization && <span style={styles.org}>{s.organization}</span>}
          </div>
          <a href={`mailto:${s.email}`} style={styles.email}>{s.email}</a>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    background: '#16161f',
    borderRadius: 8,
    border: '1px solid #2a2a3e',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 600,
    flexShrink: 0,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    flex: 1,
  },
  name: {
    fontSize: 13,
    fontWeight: 500,
    color: '#f0f0f5',
  },
  role: {
    fontSize: 11,
    color: '#9898b0',
  },
  org: {
    fontSize: 11,
    color: '#5e5e7a',
  },
  email: {
    fontSize: 12,
    color: '#3b82f6',
    textDecoration: 'none',
  },
  empty: {
    color: '#5e5e7a',
    fontSize: 13,
    padding: 20,
    textAlign: 'center',
  },
};

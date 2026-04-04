import { members } from '../../data/mockData';

const roleBadge: Record<string, { className: string; label: string }> = {
  admin: { className: 'badge badge-green', label: 'Admin' },
  board: { className: 'badge badge-gold', label: 'Board Member' },
  officer: { className: 'badge badge-violet', label: 'Officer' },
  member: { className: 'badge badge-gray', label: 'Member' },
};

const statusDot: Record<string, string> = {
  active: 'status-dot--active',
  probationary: 'status-dot--warning',
  inactive: 'status-dot--inactive',
};

export default function MemberList() {
  const roleDistribution = members.reduce<Record<string, number>>((acc, m) => {
    acc[m.role] = (acc[m.role] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div style={styles.statsRow}>
        <div className="card" style={styles.statCard}>
          <div style={styles.statValue}>{members.length}</div>
          <div style={styles.statLabel}>Total Members</div>
        </div>
        <div className="card" style={styles.statCard}>
          <div style={styles.statValue}>{members.filter((m) => m.status === 'active').length}</div>
          <div style={styles.statLabel}>Active</div>
        </div>
        {Object.entries(roleDistribution).map(([role, count]) => (
          <div key={role} className="card" style={styles.statCard}>
            <div style={styles.statValue}>{count}</div>
            <div style={styles.statLabel}>{role === 'board' ? 'Board' : role.charAt(0).toUpperCase() + role.slice(1)}s</div>
          </div>
        ))}
      </div>

      <div style={styles.grid} data-testid="member-list">
        {members.map((m) => {
          const badge = roleBadge[m.role];
          const dot = statusDot[m.status];
          return (
            <div key={m.id} className="card" style={styles.memberCard}>
              <div style={styles.cardTop}>
                <div style={{ ...styles.avatar, background: m.color }}>{m.initials}</div>
                <div style={styles.statusWrap}>
                  <span className={`status-dot ${dot}`} />
                  <span style={styles.statusText}>{m.status}</span>
                </div>
              </div>
              <div style={styles.name}>{m.name}</div>
              <div style={styles.email}>{m.email}</div>
              <div style={styles.cardMeta}>
                <span className={badge.className}>{badge.label}</span>
              </div>
              <div style={styles.cardBottom}>
                <div>
                  <div style={styles.metaLabel}>Equity</div>
                  <div style={styles.metaValue}>${m.equity.toLocaleString()}</div>
                </div>
                <div>
                  <div style={styles.metaLabel}>Joined</div>
                  <div style={styles.metaValue}>
                    {new Date(m.joinDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  statsRow: {
    display: 'flex',
    gap: 12,
    marginBottom: 24,
    flexWrap: 'wrap',
  },
  statCard: {
    flex: 1,
    minWidth: 120,
    textAlign: 'center',
    padding: 16,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    color: '#ca8a04',
  },
  statLabel: {
    fontSize: 12,
    color: '#9898b0',
    marginTop: 2,
    textTransform: 'capitalize',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: 16,
  },
  memberCard: {
    padding: 20,
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 600,
    color: '#0a0a0f',
  },
  statusWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#5e5e7a',
    textTransform: 'capitalize',
  },
  name: {
    fontSize: 15,
    fontWeight: 600,
    color: '#f0f0f5',
    marginBottom: 2,
  },
  email: {
    fontSize: 13,
    color: '#5e5e7a',
    marginBottom: 10,
  },
  cardMeta: {
    marginBottom: 14,
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 14,
    borderTop: '1px solid #2a2a3e',
  },
  metaLabel: {
    fontSize: 11,
    color: '#5e5e7a',
    marginBottom: 2,
  },
  metaValue: {
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "'JetBrains Mono', monospace",
    color: '#f0f0f5',
  },
};

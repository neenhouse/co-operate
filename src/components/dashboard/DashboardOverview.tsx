import { Link } from 'react-router-dom';
import StatCard from './StatCard';
import { coopInfo, activities, proposals } from '../../data/mockData';

export default function DashboardOverview() {
  const activeProposals = proposals.filter((p) => p.status === 'active');

  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>Dashboard</h1>
        <div style={styles.actions}>
          <Link to="/app/governance" className="btn btn-primary btn-sm">New Proposal</Link>
          <Link to="/app/members" className="btn btn-secondary btn-sm">Invite Member</Link>
          <Link to="/app/profit-sharing" className="btn btn-secondary btn-sm">Run Distribution</Link>
        </div>
      </div>

      <div style={styles.statsGrid}>
        <StatCard
          label="Members"
          value={coopInfo.memberCount}
          accent="#a855f7"
          icon={<svg aria-hidden="true" width="22" height="22" viewBox="0 0 18 18" fill="none" stroke="#a855f7" strokeWidth="1.5"><circle cx="7" cy="5" r="3"/><path d="M1 15c0-3.3 2.7-5 6-5s6 1.7 6 5"/><circle cx="13" cy="6" r="2.5"/></svg>}
        />
        <StatCard
          label="Treasury"
          value={`$${coopInfo.treasury.toLocaleString()}`}
          accent="#16a34a"
          icon={<svg aria-hidden="true" width="22" height="22" viewBox="0 0 18 18" fill="none" stroke="#16a34a" strokeWidth="1.5"><circle cx="9" cy="9" r="8"/><path d="M9 4v10M6 6.5c0-1 1.5-2 3-2s3 .5 3 2-1.5 2-3 2-3 .5-3 2 1.5 2 3 2 3-1 3-2"/></svg>}
        />
        <StatCard
          label="Active Proposals"
          value={coopInfo.activeProposals}
          accent="#ca8a04"
          icon={<svg aria-hidden="true" width="22" height="22" viewBox="0 0 18 18" fill="none" stroke="#ca8a04" strokeWidth="1.5"><rect x="2" y="1" width="14" height="16" rx="2"/><path d="M5 5h8M5 9h6M5 13h4"/></svg>}
        />
        <StatCard
          label="Voting Participation"
          value={`${coopInfo.votingParticipation}%`}
          accent="#ca8a04"
          icon={<svg aria-hidden="true" width="22" height="22" viewBox="0 0 18 18" fill="none" stroke="#ca8a04" strokeWidth="1.5"><path d="M9 1L1 5v2h16V5L9 1z"/><path d="M3 7v7M7 7v7M11 7v7M15 7v7"/><path d="M1 14h16v2H1z"/></svg>}
        />
      </div>

      <div style={styles.columns}>
        <div style={styles.activitySection}>
          <h2 style={styles.sectionTitle}>Recent Activity</h2>
          <div style={styles.activityList}>
            {activities.map((a) => (
              <div key={a.id} style={styles.activityItem}>
                <div style={{ ...styles.activityDot, background: getActivityColor(a.type) }} />
                <div style={styles.activityContent}>
                  <div style={styles.activityMessage}>{a.message}</div>
                  <div style={styles.activityTime}>{a.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.votesSection}>
          <h2 style={styles.sectionTitle}>Upcoming Votes</h2>
          <div style={styles.votesList}>
            {activeProposals.slice(0, 4).map((p) => (
              <Link key={p.id} to="/app/governance" className="vote-card-link">
                <div style={styles.voteTitle}>{p.title}</div>
                <div style={styles.voteMeta}>
                  <span className="badge badge-green">{p.votesFor + p.votesAgainst + p.votesAbstain}/{p.totalEligible} voted</span>
                  <span style={styles.voteDeadline}>Due {new Date(p.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getActivityColor(type: string): string {
  switch (type) {
    case 'vote': return '#ca8a04';
    case 'proposal': return '#a855f7';
    case 'member': return '#16a34a';
    case 'distribution': return '#3b82f6';
    default: return '#5e5e7a';
  }
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
  actions: {
    display: 'flex',
    gap: 8,
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: 16,
    marginBottom: 32,
  },
  columns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 24,
  },
  activitySection: {
    background: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderRadius: 12,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 16,
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  activityItem: {
    display: 'flex',
    gap: 12,
    alignItems: 'flex-start',
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    marginTop: 6,
    flexShrink: 0,
  },
  activityContent: {
    flex: 1,
  },
  activityMessage: {
    fontSize: 13,
    color: '#f0f0f5',
    lineHeight: 1.4,
  },
  activityTime: {
    fontSize: 12,
    color: '#5e5e7a',
    marginTop: 2,
  },
  votesSection: {
    background: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderRadius: 12,
    padding: 24,
  },
  votesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  voteTitle: {
    fontSize: 14,
    fontWeight: 500,
    color: '#f0f0f5',
    marginBottom: 8,
  },
  voteMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  voteDeadline: {
    fontSize: 12,
    color: '#5e5e7a',
  },
};

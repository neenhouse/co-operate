import type { Proposal } from '../../data/mockData';
import VotingWidget from './VotingWidget';

interface ProposalDetailProps {
  proposal: Proposal;
  onBack: () => void;
}

const statusConfig: Record<string, { badge: string; label: string }> = {
  active: { badge: 'badge-green', label: 'Active' },
  pending: { badge: 'badge-gold', label: 'Pending' },
  closed: { badge: 'badge-gray', label: 'Closed' },
  passed: { badge: 'badge-green', label: 'Passed' },
  failed: { badge: 'badge-red', label: 'Failed' },
};

export default function ProposalDetail({ proposal, onBack }: ProposalDetailProps) {
  const config = statusConfig[proposal.status];

  return (
    <div>
      <button style={styles.back} onClick={onBack}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M10 3L5 8l5 5" />
        </svg>
        Back to Proposals
      </button>

      <div style={styles.layout}>
        <div style={styles.main}>
          <div style={styles.header}>
            <div style={styles.badges}>
              <span className={`badge ${config.badge}`}>{config.label}</span>
              <span className="badge badge-gray">{proposal.category}</span>
            </div>
            <h1 style={styles.title}>{proposal.title}</h1>
            <div style={styles.meta}>
              <span>Proposed by {proposal.proposer}</span>
              <span>Created {new Date(proposal.createdAt).toLocaleDateString()}</span>
              <span>Deadline {new Date(proposal.deadline).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="card" style={styles.description}>
            <h3 style={styles.sectionTitle}>Description</h3>
            <p style={styles.descText}>{proposal.description}</p>
          </div>

          <div className="card" style={styles.discussion}>
            <h3 style={styles.sectionTitle}>Discussion</h3>
            <div style={styles.commentBox}>
              <textarea
                rows={3}
                placeholder="Add your thoughts on this proposal..."
                style={{ width: '100%', resize: 'vertical' }}
              />
              <button className="btn btn-secondary btn-sm" style={{ marginTop: 8 }}>Post Comment</button>
            </div>
            <div style={styles.commentList}>
              <Comment
                name="James Chen"
                initials="JC"
                color="#16a34a"
                text="I support this. The numbers make sense and we've been discussing this for months."
                time="2 days ago"
              />
              <Comment
                name="Elena Rodriguez"
                initials="ER"
                color="#3b82f6"
                text="Can we get more details on the projected timeline? 18 months to break-even seems optimistic."
                time="1 day ago"
              />
              <Comment
                name="Maria Santos"
                initials="MS"
                color="#ca8a04"
                text="Great point, Elena. I'll prepare a detailed financial projection for the next meeting."
                time="5 hours ago"
              />
            </div>
          </div>
        </div>

        <div style={styles.sidebar}>
          <VotingWidget proposal={proposal} />
        </div>
      </div>
    </div>
  );
}

function Comment({ name, initials, color, text, time }: { name: string; initials: string; color: string; text: string; time: string }) {
  return (
    <div style={commentStyles.comment}>
      <div style={{ ...commentStyles.avatar, background: color }}>{initials}</div>
      <div style={commentStyles.body}>
        <div style={commentStyles.header}>
          <span style={commentStyles.name}>{name}</span>
          <span style={commentStyles.time}>{time}</span>
        </div>
        <p style={commentStyles.text}>{text}</p>
      </div>
    </div>
  );
}

const commentStyles: Record<string, React.CSSProperties> = {
  comment: {
    display: 'flex',
    gap: 12,
    padding: '16px 0',
    borderBottom: '1px solid #2a2a3e',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 600,
    color: '#0a0a0f',
    flexShrink: 0,
  },
  body: {
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontSize: 13,
    fontWeight: 600,
    color: '#f0f0f5',
  },
  time: {
    fontSize: 12,
    color: '#5e5e7a',
  },
  text: {
    fontSize: 13,
    color: '#9898b0',
    lineHeight: 1.5,
  },
};

const styles: Record<string, React.CSSProperties> = {
  back: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    background: 'none',
    border: 'none',
    color: '#9898b0',
    fontSize: 14,
    cursor: 'pointer',
    marginBottom: 24,
    padding: 0,
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 340px',
    gap: 24,
    alignItems: 'start',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  header: {},
  badges: {
    display: 'flex',
    gap: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: 8,
  },
  meta: {
    display: 'flex',
    gap: 20,
    fontSize: 13,
    color: '#5e5e7a',
  },
  description: {},
  sectionTitle: {
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 12,
  },
  descText: {
    fontSize: 14,
    color: '#9898b0',
    lineHeight: 1.7,
  },
  discussion: {},
  commentBox: {
    marginBottom: 16,
  },
  commentList: {},
  sidebar: {},
};

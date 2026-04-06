import { useState } from 'react';
import { proposals } from '../../data/mockData';
import ProposalDetail from './ProposalDetail';

const statusConfig: Record<string, { badge: string; label: string }> = {
  active: { badge: 'badge-green', label: 'Active' },
  pending: { badge: 'badge-gold', label: 'Pending' },
  closed: { badge: 'badge-gray', label: 'Closed' },
  passed: { badge: 'badge-green', label: 'Passed' },
  failed: { badge: 'badge-red', label: 'Failed' },
};

export default function ProposalList() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  const selected = selectedId ? proposals.find((p) => p.id === selectedId) : null;

  if (selected) {
    return <ProposalDetail proposal={selected} onBack={() => setSelectedId(null)} />;
  }

  return (
    <div>
      <div style={styles.header}>
        <h1 style={styles.title}>Governance</h1>
        <button className="btn btn-primary btn-sm" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'New Proposal'}
        </button>
      </div>

      {showForm && (
        <div className="card" style={styles.form}>
          <h3 style={styles.formTitle}>Create Proposal</h3>
          <div style={styles.formGrid}>
            <div style={styles.formGroup}>
              <label htmlFor="proposal-title" style={styles.label}>Title</label>
              <input id="proposal-title" type="text" placeholder="Proposal title" style={{ width: '100%' }} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="proposal-category" style={styles.label}>Category</label>
              <select id="proposal-category" style={{ width: '100%' }}>
                <option>Operations</option>
                <option>Financial</option>
                <option>Governance</option>
                <option>Policy</option>
                <option>Benefits</option>
                <option>Expansion</option>
              </select>
            </div>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="proposal-description" style={styles.label}>Description</label>
            <textarea id="proposal-description" rows={3} placeholder="Describe your proposal..." style={{ width: '100%', resize: 'vertical' }} />
          </div>
          <button className="btn btn-primary btn-sm" onClick={() => setShowForm(false)}>Submit Proposal</button>
        </div>
      )}

      <div style={styles.list} data-testid="proposal-list">
        {proposals.map((p) => {
          const totalVotes = p.votesFor + p.votesAgainst + p.votesAbstain;
          const config = statusConfig[p.status];
          return (
            <div key={p.id} className="card" style={styles.card} onClick={() => setSelectedId(p.id)}>
              <div style={styles.cardTop}>
                <div style={styles.cardInfo}>
                  <span className={`badge ${config.badge}`}>{config.label}</span>
                  <span className="badge badge-gray">{p.category}</span>
                </div>
                <span style={styles.deadline}>
                  {new Date(p.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
              </div>
              <h3 style={styles.cardTitle}>{p.title}</h3>
              <p style={styles.cardDesc}>{p.description}</p>
              <div style={styles.cardBottom}>
                <span style={styles.proposer}>by {p.proposer}</span>
                <span style={styles.votes}>{totalVotes}/{p.totalEligible} voted</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: '1.75rem',
  },
  form: {
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 16,
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16,
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 12,
  },
  label: {
    display: 'block',
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 6,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  card: {
    cursor: 'pointer',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardInfo: {
    display: 'flex',
    gap: 8,
  },
  deadline: {
    fontSize: 12,
    color: '#5e5e7a',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: '#9898b0',
    lineHeight: 1.5,
    marginBottom: 12,
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTop: '1px solid #2a2a3e',
  },
  proposer: {
    fontSize: 13,
    color: '#5e5e7a',
  },
  votes: {
    fontSize: 13,
    color: '#9898b0',
    fontFamily: "'JetBrains Mono', monospace",
  },
};

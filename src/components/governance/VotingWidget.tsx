import { useState } from 'react';
import type { Proposal } from '../../data/mockData';

interface VotingWidgetProps {
  proposal: Proposal;
}

export default function VotingWidget({ proposal }: VotingWidgetProps) {
  const [voted, setVoted] = useState<string | null>(null);
  const totalVotes = proposal.votesFor + proposal.votesAgainst + proposal.votesAbstain;
  const forPct = totalVotes ? Math.round((proposal.votesFor / totalVotes) * 100) : 0;
  const againstPct = totalVotes ? Math.round((proposal.votesAgainst / totalVotes) * 100) : 0;
  const abstainPct = totalVotes ? 100 - forPct - againstPct : 0;
  const quorumPct = Math.round((totalVotes / proposal.quorum) * 100);
  const quorumMet = totalVotes >= proposal.quorum;

  return (
    <div style={styles.widget}>
      <h3 style={styles.title}>Cast Your Vote</h3>
      <div style={styles.buttons}>
        <button
          className={`btn ${voted === 'yes' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setVoted('yes')}
          style={{ flex: 1 }}
        >
          Yes
        </button>
        <button
          className={`btn ${voted === 'no' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setVoted('no')}
          style={{ flex: 1 }}
        >
          No
        </button>
        <button
          className={`btn ${voted === 'abstain' ? 'btn-primary' : 'btn-ghost'}`}
          onClick={() => setVoted('abstain')}
          style={{ flex: 1 }}
        >
          Abstain
        </button>
      </div>

      <div style={styles.results}>
        <div style={styles.resultLabel}>
          <span>Results</span>
          <span style={styles.totalVotes}>{totalVotes} of {proposal.totalEligible} voted</span>
        </div>
        <div style={styles.bar}>
          <div style={{ ...styles.barSegment, width: `${forPct}%`, background: '#16a34a' }} />
          <div style={{ ...styles.barSegment, width: `${againstPct}%`, background: '#ef4444' }} />
          <div style={{ ...styles.barSegment, width: `${abstainPct}%`, background: '#5e5e7a' }} />
        </div>
        <div style={styles.legend}>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#16a34a' }} />Yes {forPct}%</span>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#ef4444' }} />No {againstPct}%</span>
          <span style={styles.legendItem}><span style={{ ...styles.legendDot, background: '#5e5e7a' }} />Abstain {abstainPct}%</span>
        </div>
      </div>

      <div style={styles.quorum}>
        <div style={styles.quorumLabel}>
          <span>Quorum</span>
          <span className={quorumMet ? 'badge badge-green' : 'badge badge-gold'}>
            {quorumMet ? 'Met' : `${quorumPct}%`}
          </span>
        </div>
        <div style={styles.quorumBar}>
          <div style={{ ...styles.quorumFill, width: `${Math.min(quorumPct, 100)}%` }} />
        </div>
        <div style={styles.quorumText}>{totalVotes} of {proposal.quorum} needed</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  widget: {
    background: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderRadius: 12,
    padding: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 16,
  },
  buttons: {
    display: 'flex',
    gap: 8,
    marginBottom: 24,
  },
  results: {
    marginBottom: 20,
  },
  resultLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 8,
  },
  totalVotes: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
  },
  bar: {
    display: 'flex',
    height: 8,
    borderRadius: 4,
    overflow: 'hidden',
    background: '#252536',
    marginBottom: 8,
  },
  barSegment: {
    height: '100%',
    transition: 'width 300ms ease',
  },
  legend: {
    display: 'flex',
    gap: 16,
    fontSize: 12,
    color: '#9898b0',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    display: 'inline-block',
  },
  quorum: {
    paddingTop: 16,
    borderTop: '1px solid #2a2a3e',
  },
  quorumLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 8,
  },
  quorumBar: {
    height: 6,
    borderRadius: 3,
    background: '#252536',
    marginBottom: 4,
  },
  quorumFill: {
    height: '100%',
    borderRadius: 3,
    background: '#ca8a04',
    transition: 'width 300ms ease',
  },
  quorumText: {
    fontSize: 12,
    color: '#5e5e7a',
  },
};

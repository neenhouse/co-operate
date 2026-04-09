import { DEAL_STAGES } from '../../data/mockData';
import type { DealStage } from '../../data/mockData';

interface StageTimelineProps {
  currentStage: DealStage;
}

export default function StageTimeline({ currentStage }: StageTimelineProps) {
  const currentIdx = DEAL_STAGES.findIndex((s) => s.key === currentStage);

  return (
    <div style={styles.container}>
      {DEAL_STAGES.map((stage, i) => {
        const isCompleted = i < currentIdx;
        const isCurrent = i === currentIdx;
        return (
          <div key={stage.key} style={styles.step}>
            <div style={styles.nodeRow}>
              {i > 0 && (
                <div
                  style={{
                    ...styles.line,
                    background: isCompleted || isCurrent ? '#ca8a04' : '#2a2a3e',
                  }}
                />
              )}
              <div
                style={{
                  ...styles.node,
                  ...(isCompleted ? styles.nodeCompleted : {}),
                  ...(isCurrent ? styles.nodeCurrent : {}),
                }}
              >
                {isCompleted && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#0a0a0f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <span
              style={{
                ...styles.label,
                ...(isCurrent ? styles.labelCurrent : {}),
                ...(isCompleted ? styles.labelCompleted : {}),
              }}
            >
              {stage.shortLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 0,
    padding: '16px 0',
    overflowX: 'auto',
  },
  step: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    minWidth: 80,
    gap: 6,
  },
  nodeRow: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    position: 'relative',
  },
  line: {
    position: 'absolute',
    right: '50%',
    width: '100%',
    height: 2,
    zIndex: 0,
  },
  node: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    border: '2px solid #2a2a3e',
    background: '#12121a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    position: 'relative',
    flexShrink: 0,
  },
  nodeCompleted: {
    background: '#ca8a04',
    borderColor: '#ca8a04',
  },
  nodeCurrent: {
    borderColor: '#ca8a04',
    boxShadow: '0 0 0 3px rgba(202, 138, 4, 0.2)',
  },
  label: {
    fontSize: 10,
    color: '#5e5e7a',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
  labelCurrent: {
    color: '#ca8a04',
    fontWeight: 600,
  },
  labelCompleted: {
    color: '#9898b0',
  },
};

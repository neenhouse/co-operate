import type { EligibilityLevel } from './eligibility';

const BADGE_CONFIG: Record<EligibilityLevel, { label: string; color: string; bg: string }> = {
  'match': { label: 'Match', color: '#16a34a', bg: 'rgba(22, 163, 74, 0.1)' },
  'partial': { label: 'Partial', color: '#ca8a04', bg: 'rgba(202, 138, 4, 0.1)' },
  'no-match': { label: 'No Match', color: '#5e5e7a', bg: 'rgba(94, 94, 122, 0.1)' },
};

interface EligibilityBadgeProps {
  level: EligibilityLevel;
}

export default function EligibilityBadge({ level }: EligibilityBadgeProps) {
  const config = BADGE_CONFIG[level];
  return (
    <span
      style={{
        ...styles.badge,
        color: config.color,
        background: config.bg,
      }}
    >
      {config.label}
    </span>
  );
}

const styles: Record<string, React.CSSProperties> = {
  badge: {
    fontSize: 11,
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 4,
    whiteSpace: 'nowrap',
  },
};

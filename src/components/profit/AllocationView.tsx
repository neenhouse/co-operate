import { members } from '../../data/mockData';
import type { RuleType } from './DistributionConfig';

interface AllocationViewProps {
  rule: RuleType;
  hoursWeight: number;
  seniorityWeight: number;
}

export default function AllocationView({ rule, hoursWeight, seniorityWeight }: AllocationViewProps) {
  const activeMembers = members.filter((m) => m.status === 'active' || m.status === 'probationary');
  const totalAmount = 42800;

  const allocations = activeMembers.map((m) => {
    let share: number;
    if (rule === 'equal') {
      share = totalAmount / activeMembers.length;
    } else if (rule === 'hours') {
      // Simulate hours-based: randomized but consistent
      const hoursMultiplier = 0.7 + (parseInt(m.id) * 0.37 % 0.6);
      const totalMultiplier = activeMembers.reduce((sum, am) => sum + 0.7 + (parseInt(am.id) * 0.37 % 0.6), 0);
      share = (hoursMultiplier / totalMultiplier) * totalAmount;
    } else {
      const roleWeight = m.role === 'admin' ? 1.3 : m.role === 'board' ? 1.2 : m.role === 'officer' ? 1.15 : 1.0;
      const hoursMultiplier = 0.7 + (parseInt(m.id) * 0.37 % 0.6);
      const combined = (hoursMultiplier * hoursWeight + roleWeight * seniorityWeight) / 100;
      const totalCombined = activeMembers.reduce((sum, am) => {
        const rw = am.role === 'admin' ? 1.3 : am.role === 'board' ? 1.2 : am.role === 'officer' ? 1.15 : 1.0;
        const hm = 0.7 + (parseInt(am.id) * 0.37 % 0.6);
        return sum + (hm * hoursWeight + rw * seniorityWeight) / 100;
      }, 0);
      share = (combined / totalCombined) * totalAmount;
    }
    return { member: m, share: Math.round(share) };
  }).sort((a, b) => b.share - a.share);

  const maxShare = Math.max(...allocations.map((a) => a.share));

  return (
    <div className="card">
      <h3 style={styles.title}>Allocation Preview</h3>
      <div style={styles.list}>
        {allocations.map(({ member, share }) => (
          <div key={member.id} style={styles.row}>
            <div style={styles.memberInfo}>
              <div style={{ ...styles.avatar, background: member.color }}>{member.initials}</div>
              <div>
                <div style={styles.name}>{member.name}</div>
                <div style={styles.role}>{member.role}</div>
              </div>
            </div>
            <div style={styles.barWrap}>
              <div style={{ ...styles.bar, width: `${(share / maxShare) * 100}%` }} />
            </div>
            <div style={styles.amount}>${share.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  title: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 20,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  memberInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    width: 160,
    flexShrink: 0,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 11,
    fontWeight: 600,
    color: '#0a0a0f',
    flexShrink: 0,
  },
  name: {
    fontSize: 13,
    fontWeight: 500,
    color: '#f0f0f5',
  },
  role: {
    fontSize: 11,
    color: '#5e5e7a',
    textTransform: 'capitalize',
  },
  barWrap: {
    flex: 1,
    height: 8,
    background: '#252536',
    borderRadius: 4,
  },
  bar: {
    height: '100%',
    borderRadius: 4,
    background: 'linear-gradient(90deg, #ca8a04, #eab308)',
    transition: 'width 300ms ease',
  },
  amount: {
    width: 80,
    textAlign: 'right',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    fontWeight: 500,
    color: '#f0f0f5',
  },
};

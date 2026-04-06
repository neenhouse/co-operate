import { useState } from 'react';
import DistributionConfig from '../components/profit/DistributionConfig';
import AllocationView from '../components/profit/AllocationView';
import Simulator from '../components/profit/Simulator';
import type { RuleType } from '../components/profit/DistributionConfig';

export default function ProfitSharingPage() {
  const [rule, setRule] = useState<RuleType>('equal');
  const [hoursWeight, setHoursWeight] = useState(60);
  const [seniorityWeight, setSeniorityWeight] = useState(40);

  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: 24 }}>Profit Sharing</h1>
      <div style={styles.layout}>
        <div style={styles.left}>
          <DistributionConfig
            rule={rule}
            onRuleChange={setRule}
            hoursWeight={hoursWeight}
            seniorityWeight={seniorityWeight}
            onHoursWeightChange={setHoursWeight}
            onSeniorityWeightChange={setSeniorityWeight}
          />
          <Simulator />
        </div>
        <div style={styles.right}>
          <AllocationView rule={rule} hoursWeight={hoursWeight} seniorityWeight={seniorityWeight} />
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: 24,
    alignItems: 'start',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  right: {},
};

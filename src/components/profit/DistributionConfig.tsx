import { useState } from 'react';

export type RuleType = 'equal' | 'hours' | 'weighted';

interface DistributionConfigProps {
  rule: RuleType;
  onRuleChange: (rule: RuleType) => void;
  hoursWeight: number;
  seniorityWeight: number;
  onHoursWeightChange: (v: number) => void;
  onSeniorityWeightChange: (v: number) => void;
}

export default function DistributionConfig({
  rule,
  onRuleChange,
  hoursWeight,
  seniorityWeight,
  onHoursWeightChange,
  onSeniorityWeightChange,
}: DistributionConfigProps) {
  const [totalAmount, setTotalAmount] = useState(42800);

  return (
    <div className="card">
      <h3 style={styles.title}>Distribution Rules</h3>

      <div style={styles.ruleOptions}>
        {([['equal', 'Equal Split'], ['hours', 'Hours-Based'], ['weighted', 'Role-Weighted']] as const).map(([key, label]) => (
          <button
            key={key}
            className={`btn ${rule === key ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => onRuleChange(key)}
            style={{ flex: 1 }}
          >
            {label}
          </button>
        ))}
      </div>

      {rule === 'weighted' && (
        <div style={styles.sliders}>
          <div style={styles.sliderGroup}>
            <div style={styles.sliderLabel}>
              <span>Hours Worked</span>
              <span style={styles.sliderValue}>{hoursWeight}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={hoursWeight}
              onChange={(e) => {
                const v = Number(e.target.value);
                onHoursWeightChange(v);
                onSeniorityWeightChange(100 - v);
              }}
              style={styles.slider}
            />
          </div>
          <div style={styles.sliderGroup}>
            <div style={styles.sliderLabel}>
              <span>Seniority</span>
              <span style={styles.sliderValue}>{seniorityWeight}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={seniorityWeight}
              onChange={(e) => {
                const v = Number(e.target.value);
                onSeniorityWeightChange(v);
                onHoursWeightChange(100 - v);
              }}
              style={styles.slider}
            />
          </div>
        </div>
      )}

      <div style={styles.amountSection}>
        <label style={styles.label}>Distribution Amount</label>
        <div style={styles.amountInput}>
          <span style={styles.dollar}>$</span>
          <input
            type="number"
            value={totalAmount}
            onChange={(e) => setTotalAmount(Number(e.target.value))}
            style={{ ...styles.input, paddingLeft: 28 }}
          />
        </div>
      </div>

      <div style={styles.summary}>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Method</span>
          <span style={styles.summaryValue}>
            {rule === 'equal' ? 'Equal Split' : rule === 'hours' ? 'Hours-Based' : 'Role-Weighted'}
          </span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Total Amount</span>
          <span style={styles.summaryValue}>${totalAmount.toLocaleString()}</span>
        </div>
        <div style={styles.summaryRow}>
          <span style={styles.summaryLabel}>Members</span>
          <span style={styles.summaryValue}>22 eligible</span>
        </div>
        {rule === 'equal' && (
          <div style={styles.summaryRow}>
            <span style={styles.summaryLabel}>Per Member</span>
            <span style={{ ...styles.summaryValue, color: '#ca8a04' }}>${Math.round(totalAmount / 22).toLocaleString()}</span>
          </div>
        )}
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
  ruleOptions: {
    display: 'flex',
    gap: 8,
    marginBottom: 24,
  },
  sliders: {
    marginBottom: 24,
    padding: 16,
    background: '#252536',
    borderRadius: 8,
  },
  sliderGroup: {
    marginBottom: 16,
  },
  sliderLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 8,
  },
  sliderValue: {
    fontFamily: "'JetBrains Mono', monospace",
    color: '#ca8a04',
  },
  slider: {
    width: '100%',
    accentColor: '#ca8a04',
  },
  amountSection: {
    marginBottom: 24,
  },
  label: {
    display: 'block',
    fontSize: 13,
    color: '#9898b0',
    marginBottom: 6,
  },
  amountInput: {
    position: 'relative',
  },
  dollar: {
    position: 'absolute',
    left: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#5e5e7a',
    fontSize: 14,
  },
  input: {
    width: '100%',
    padding: '10px 14px',
    background: '#252536',
    border: '1px solid #2a2a3e',
    borderRadius: 8,
    color: '#f0f0f5',
    fontSize: 14,
    fontFamily: "'JetBrains Mono', monospace",
  },
  summary: {
    padding: 16,
    background: '#252536',
    borderRadius: 8,
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #2a2a3e',
  },
  summaryLabel: {
    fontSize: 13,
    color: '#5e5e7a',
  },
  summaryValue: {
    fontSize: 13,
    fontWeight: 500,
    color: '#f0f0f5',
  },
};

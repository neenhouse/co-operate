interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: string;
}

export default function StatCard({ label, value, icon, accent = '#ca8a04' }: StatCardProps) {
  return (
    <div className="card" style={styles.card}>
      <div style={{ ...styles.iconWrap, background: `${accent}15` }}>
        {icon}
      </div>
      <div>
        <div style={styles.value}>{value}</div>
        <div style={styles.label}>{label}</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  value: {
    fontSize: 24,
    fontWeight: 700,
    fontFamily: "'Space Grotesk', sans-serif",
    color: '#f0f0f5',
  },
  label: {
    fontSize: 13,
    color: '#9898b0',
    marginTop: 2,
  },
};

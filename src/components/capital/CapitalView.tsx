import LenderDirectory from './LenderDirectory';
import ApplicationTracker from './ApplicationTracker';

export default function CapitalView() {
  return (
    <div>
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Capital Matching</h1>
          <p style={styles.subtitle}>Connect conversions to cooperative-friendly lenders</p>
        </div>
      </div>

      <section style={styles.section}>
        <LenderDirectory />
      </section>

      <section style={styles.section}>
        <ApplicationTracker />
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#f0f0f5',
    fontFamily: "'Space Grotesk', sans-serif",
    margin: 0,
  },
  subtitle: {
    fontSize: 14,
    color: '#9898b0',
    margin: '4px 0 0',
  },
  section: {
    marginBottom: 36,
  },
};

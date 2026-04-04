import HealthMetrics from '../components/analytics/HealthMetrics';
import EngagementChart from '../components/analytics/EngagementChart';

export default function AnalyticsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '1.75rem', marginBottom: 24 }}>Analytics</h1>
      <HealthMetrics />
      <EngagementChart />
    </div>
  );
}

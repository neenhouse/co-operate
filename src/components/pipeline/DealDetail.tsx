import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deals, DEAL_STAGES } from '../../data/mockData';
import StageTimeline from './StageTimeline';
import StakeholderList from './StakeholderList';
import DocumentList from './DocumentList';
import ComplianceChecklist from './ComplianceChecklist';

type Tab = 'overview' | 'stakeholders' | 'documents' | 'compliance';

const TABS: { key: Tab; label: string }[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'stakeholders', label: 'Stakeholders' },
  { key: 'documents', label: 'Documents' },
  { key: 'compliance', label: 'Compliance' },
];

export default function DealDetail() {
  const { dealId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const deal = deals.find((d) => d.id === dealId);

  if (!deal) {
    return (
      <div style={styles.notFound}>
        <p>Deal not found.</p>
        <button type="button" onClick={() => navigate('/app/pipeline')} style={styles.backBtn}>
          Back to Pipeline
        </button>
      </div>
    );
  }

  const stageInfo = DEAL_STAGES.find((s) => s.key === deal.stage);

  return (
    <div>
      <button type="button" onClick={() => navigate('/app/pipeline')} style={styles.backBtn}>
        &larr; Back to Pipeline
      </button>

      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.title}>{deal.businessName}</h1>
          <p style={styles.subtitle}>
            {deal.industry} &middot; {deal.location.city}, {deal.location.state} &middot; {deal.workerCount} workers
          </p>
        </div>
        <span style={styles.stageBadge}>{stageInfo?.label}</span>
      </div>

      <StageTimeline currentStage={deal.stage} />

      {deal.blockers.length > 0 && (
        <div style={styles.blockersBanner}>
          <strong style={styles.blockersTitle}>Blockers ({deal.blockers.length})</strong>
          {deal.blockers.map((b, i) => (
            <p key={i} style={styles.blockerText}>{b}</p>
          ))}
        </div>
      )}

      <div style={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            style={{
              ...styles.tab,
              ...(activeTab === tab.key ? styles.tabActive : {}),
            }}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
            {tab.key === 'documents' && deal.documents.length > 0 && (
              <span style={styles.tabCount}>{deal.documents.length}</span>
            )}
            {tab.key === 'stakeholders' && deal.stakeholders.length > 0 && (
              <span style={styles.tabCount}>{deal.stakeholders.length}</span>
            )}
          </button>
        ))}
      </div>

      <div style={styles.tabContent}>
        {activeTab === 'overview' && <OverviewTab deal={deal} />}
        {activeTab === 'stakeholders' && <StakeholderList stakeholders={deal.stakeholders} />}
        {activeTab === 'documents' && <DocumentList documents={deal.documents} />}
        {activeTab === 'compliance' && <ComplianceChecklist items={deal.compliance} />}
      </div>
    </div>
  );
}

function OverviewTab({ deal }: { deal: typeof deals[0] }) {
  return (
    <div style={styles.overview}>
      <div style={styles.factsGrid}>
        <Fact label="Owner" value={deal.ownerName} />
        <Fact label="Workers" value={String(deal.workerCount)} />
        <Fact label="Est. Value" value={deal.estimatedValue} />
        <Fact label="Started" value={deal.startDate} />
        <Fact label="Target Close" value={deal.targetCloseDate} />
        <Fact label="Location" value={`${deal.location.city}, ${deal.location.state}`} />
      </div>
      {deal.notes && (
        <div style={styles.notesSection}>
          <h3 style={styles.sectionTitle}>Notes</h3>
          <p style={styles.notes}>{deal.notes}</p>
        </div>
      )}
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.fact}>
      <span style={styles.factLabel}>{label}</span>
      <span style={styles.factValue}>{value}</span>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  notFound: {
    color: '#9898b0',
    textAlign: 'center',
    paddingTop: 80,
  },
  backBtn: {
    background: 'none',
    border: 'none',
    color: '#5e5e7a',
    cursor: 'pointer',
    fontSize: 13,
    padding: '4px 0',
    marginBottom: 16,
    font: 'inherit',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#f0f0f5',
    fontFamily: "'Space Grotesk', sans-serif",
    margin: '0 0 4px',
  },
  subtitle: {
    fontSize: 14,
    color: '#9898b0',
    margin: 0,
  },
  stageBadge: {
    fontSize: 12,
    color: '#ca8a04',
    background: 'rgba(202, 138, 4, 0.1)',
    border: '1px solid rgba(202, 138, 4, 0.3)',
    padding: '4px 12px',
    borderRadius: 6,
    whiteSpace: 'nowrap',
  },
  blockersBanner: {
    background: 'rgba(239, 68, 68, 0.06)',
    border: '1px solid rgba(239, 68, 68, 0.2)',
    borderRadius: 8,
    padding: '12px 16px',
    marginBottom: 8,
  },
  blockersTitle: {
    fontSize: 13,
    color: '#ef4444',
  },
  blockerText: {
    fontSize: 13,
    color: '#f0f0f5',
    margin: '6px 0 0',
    lineHeight: 1.4,
  },
  tabs: {
    display: 'flex',
    gap: 0,
    borderBottom: '1px solid #2a2a3e',
    marginBottom: 20,
  },
  tab: {
    padding: '10px 16px',
    fontSize: 13,
    color: '#5e5e7a',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    font: 'inherit',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    transition: 'color 150ms ease',
  },
  tabActive: {
    color: '#f0f0f5',
    borderBottomColor: '#ca8a04',
  },
  tabCount: {
    fontSize: 10,
    color: '#5e5e7a',
    background: '#1e1e2e',
    borderRadius: 8,
    padding: '1px 6px',
  },
  tabContent: {
    minHeight: 200,
  },
  // Overview tab
  overview: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  factsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: 12,
  },
  fact: {
    background: '#16161f',
    borderRadius: 8,
    border: '1px solid #2a2a3e',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  factLabel: {
    fontSize: 11,
    color: '#5e5e7a',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  factValue: {
    fontSize: 14,
    color: '#f0f0f5',
    fontWeight: 500,
  },
  notesSection: {
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: '#9898b0',
    margin: '0 0 8px',
  },
  notes: {
    fontSize: 13,
    color: '#f0f0f5',
    lineHeight: 1.6,
    margin: 0,
    background: '#16161f',
    borderRadius: 8,
    border: '1px solid #2a2a3e',
    padding: 14,
  },
};

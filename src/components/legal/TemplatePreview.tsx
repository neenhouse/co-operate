import type { Template } from '../../data/mockData';

interface TemplatePreviewProps {
  template: Template;
  onClose: () => void;
}

export default function TemplatePreview({ template, onClose }: TemplatePreviewProps) {
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>{template.title}</h2>
            <p style={styles.desc}>{template.description}</p>
          </div>
          <button style={styles.close} onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>
        <div style={styles.content}>
          <pre style={styles.pre}>{template.content}</pre>
        </div>
        <div style={styles.footer}>
          <button className="btn btn-primary" onClick={onClose}>Generate Document</button>
          <button className="btn btn-ghost" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
    padding: 32,
  },
  modal: {
    background: '#1e1e2e',
    border: '1px solid #2a2a3e',
    borderRadius: 16,
    maxWidth: 720,
    width: '100%',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '24px 24px 16px',
    borderBottom: '1px solid #2a2a3e',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    marginBottom: 4,
  },
  desc: {
    fontSize: 13,
    color: '#9898b0',
  },
  close: {
    background: 'none',
    border: 'none',
    color: '#5e5e7a',
    cursor: 'pointer',
    padding: 4,
  },
  content: {
    flex: 1,
    overflow: 'auto',
    padding: 24,
  },
  pre: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 13,
    lineHeight: 1.8,
    color: '#9898b0',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
  footer: {
    display: 'flex',
    gap: 12,
    justifyContent: 'flex-end',
    padding: '16px 24px',
    borderTop: '1px solid #2a2a3e',
  },
};

import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100dvh',
            gap: '16px',
            color: 'var(--text-secondary, #888)',
            fontFamily: 'var(--font-body, system-ui, sans-serif)',
          }}
        >
          <p style={{ fontSize: '1rem', margin: 0 }}>Something went wrong.</p>
          <a
            href="/"
            style={{ color: 'var(--accent, #ca8a04)', textDecoration: 'underline', fontSize: '0.875rem' }}
          >
            Return home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

import { Link } from 'react-router-dom';

export default function NotFoundPage() {
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
      <h1 style={{ fontSize: '1.5rem', fontWeight: 600, margin: 0, color: 'var(--text-primary, #fff)' }}>
        Page not found
      </h1>
      <p style={{ fontSize: '0.875rem', margin: 0 }}>The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        style={{ color: 'var(--accent, #ca8a04)', textDecoration: 'underline', fontSize: '0.875rem' }}
      >
        Back to home
      </Link>
    </div>
  );
}

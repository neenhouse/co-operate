import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className="app-layout" style={styles.layout}>
      <Sidebar />
      <main id="main-content" className="app-main" style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: 'flex',
    minHeight: '100dvh',
  },
  main: {
    flex: 1,
    marginLeft: 260,
    padding: '32px 40px',
    minHeight: '100dvh',
    background: '#0a0a0f',
  },
};

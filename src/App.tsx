import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LandingLayout from './components/layout/LandingLayout';
import { ErrorBoundary } from './components/ErrorBoundary';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));
const GovernancePage = lazy(() => import('./pages/GovernancePage'));
const ProfitSharingPage = lazy(() => import('./pages/ProfitSharingPage'));
const MembersPage = lazy(() => import('./pages/MembersPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));
const PipelinePage = lazy(() => import('./pages/PipelinePage'));
const DealDetailPage = lazy(() => import('./pages/DealDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', color: '#5e5e7a', gap: 10 }}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
        <path d="M10 2a8 8 0 0 1 8 8" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
      </svg>
      Loading…
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
          <Route path="/app" element={<AppLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="governance" element={<GovernancePage />} />
            <Route path="profit-sharing" element={<ProfitSharingPage />} />
            <Route path="members" element={<MembersPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="pipeline" element={<PipelinePage />} />
            <Route path="pipeline/:dealId" element={<DealDetailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

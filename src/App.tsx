import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import LandingLayout from './components/layout/LandingLayout';

const LandingPage = lazy(() => import('./pages/LandingPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage'));
const GovernancePage = lazy(() => import('./pages/GovernancePage'));
const ProfitSharingPage = lazy(() => import('./pages/ProfitSharingPage'));
const MembersPage = lazy(() => import('./pages/MembersPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

function Loading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', color: '#5e5e7a' }}>
      Loading...
    </div>
  );
}

export default function App() {
  return (
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
        </Route>
      </Routes>
    </Suspense>
  );
}

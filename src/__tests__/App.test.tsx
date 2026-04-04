import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

// Import components directly to avoid lazy loading in tests
import LandingPage from '../pages/LandingPage';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import Sidebar from '../components/layout/Sidebar';
import MemberList from '../components/members/MemberList';
import TemplateLibrary from '../components/legal/TemplateLibrary';

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      {ui}
    </MemoryRouter>
  );
}

describe('Landing Page', () => {
  it('renders hero text', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('Own Your Work.')).toBeInTheDocument();
    expect(screen.getByText('Build Together.')).toBeInTheDocument();
  });

  it('renders feature cards', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('Legal Templates')).toBeInTheDocument();
    expect(screen.getByText('Democratic Voting')).toBeInTheDocument();
    expect(screen.getByText('Profit Sharing')).toBeInTheDocument();
    expect(screen.getByText('Member Management')).toBeInTheDocument();
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Cooperative Values')).toBeInTheDocument();
  });
});

describe('Dashboard', () => {
  it('renders stat cards', () => {
    renderWithRouter(<DashboardOverview />, { route: '/app' });
    expect(screen.getByText('Members')).toBeInTheDocument();
    expect(screen.getByText('Treasury')).toBeInTheDocument();
    expect(screen.getByText('Active Proposals')).toBeInTheDocument();
    expect(screen.getByText('Voting Participation')).toBeInTheDocument();
  });
});

describe('Sidebar', () => {
  it('renders all navigation links', () => {
    renderWithRouter(<Sidebar />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Templates')).toBeInTheDocument();
    expect(screen.getByText('Governance')).toBeInTheDocument();
    expect(screen.getByText('Profit Sharing')).toBeInTheDocument();
    expect(screen.getByText('Members')).toBeInTheDocument();
    expect(screen.getByText('Analytics')).toBeInTheDocument();
  });
});

describe('Members Page', () => {
  it('renders member list', () => {
    renderWithRouter(<MemberList />);
    expect(screen.getByText('Maria Santos')).toBeInTheDocument();
    expect(screen.getByText('James Chen')).toBeInTheDocument();
    expect(screen.getByText('Aisha Williams')).toBeInTheDocument();
    expect(screen.getByTestId('member-list')).toBeInTheDocument();
  });
});

describe('Templates Page', () => {
  it('renders template cards', () => {
    renderWithRouter(<TemplateLibrary />);
    expect(screen.getByText('Worker Cooperative Bylaws')).toBeInTheDocument();
    expect(screen.getByText('Operating Agreement — LLC Co-op')).toBeInTheDocument();
    expect(screen.getByTestId('template-grid')).toBeInTheDocument();
  });
});

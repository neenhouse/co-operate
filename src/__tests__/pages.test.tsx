import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import AnalyticsPage from '../pages/AnalyticsPage';
import GovernancePage from '../pages/GovernancePage';
import ProfitSharingPage from '../pages/ProfitSharingPage';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('AnalyticsPage', () => {
  it('renders the Analytics heading', () => {
    renderWithRouter(<AnalyticsPage />);
    expect(screen.getByRole('heading', { name: 'Analytics' })).toBeInTheDocument();
  });

  it('renders the co-op health score section', () => {
    renderWithRouter(<AnalyticsPage />);
    expect(screen.getByText('Co-op Health Score')).toBeInTheDocument();
  });

  it('renders the financial overview chart', () => {
    renderWithRouter(<AnalyticsPage />);
    expect(screen.getByText('Financial Overview (Last 6 Months)')).toBeInTheDocument();
  });
});

describe('GovernancePage', () => {
  it('renders the Governance heading', () => {
    renderWithRouter(<GovernancePage />);
    expect(screen.getByRole('heading', { name: 'Governance' })).toBeInTheDocument();
  });

  it('renders the New Proposal button', () => {
    renderWithRouter(<GovernancePage />);
    expect(screen.getByText('New Proposal')).toBeInTheDocument();
  });
});

describe('ProfitSharingPage', () => {
  it('renders the Profit Sharing heading', () => {
    renderWithRouter(<ProfitSharingPage />);
    expect(screen.getByRole('heading', { name: 'Profit Sharing' })).toBeInTheDocument();
  });

  it('renders the distribution rules section', () => {
    renderWithRouter(<ProfitSharingPage />);
    expect(screen.getByText('Distribution Rules')).toBeInTheDocument();
  });
});

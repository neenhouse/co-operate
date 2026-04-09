import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import PipelinePage from '../pages/PipelinePage';
import DealCard from '../components/pipeline/DealCard';
import DealDetail from '../components/pipeline/DealDetail';
import { deals } from '../data/mockData';

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}

describe('PipelinePage', () => {
  it('renders the pipeline heading', () => {
    renderWithRouter(<PipelinePage />);
    expect(screen.getByRole('heading', { name: 'Conversion Pipeline' })).toBeInTheDocument();
  });

  it('shows deal count', () => {
    renderWithRouter(<PipelinePage />);
    expect(screen.getByText(`${deals.length} active conversions`)).toBeInTheDocument();
  });

  it('renders deal cards in board view', () => {
    renderWithRouter(<PipelinePage />);
    for (const deal of deals) {
      expect(screen.getByText(deal.businessName)).toBeInTheDocument();
    }
  });

  it('toggles between board and list view', () => {
    renderWithRouter(<PipelinePage />);

    const listButton = screen.getByRole('button', { name: /list/i });
    fireEvent.click(listButton);

    // In list view, the table headers should appear
    expect(screen.getByText('Est. Value')).toBeInTheDocument();
    expect(screen.getByText('Target Close')).toBeInTheDocument();
  });
});

describe('DealCard', () => {
  it('renders deal summary info', () => {
    const deal = deals[0];
    renderWithRouter(<DealCard deal={deal} />);

    expect(screen.getByText(deal.businessName)).toBeInTheDocument();
    expect(screen.getByText(deal.industry)).toBeInTheDocument();
    expect(screen.getByText(`${deal.workerCount} workers`)).toBeInTheDocument();
    expect(screen.getByText(deal.estimatedValue)).toBeInTheDocument();
  });

  it('shows blocker indicator when deal has blockers', () => {
    const dealWithBlockers = deals.find((d) => d.blockers.length > 0)!;
    renderWithRouter(<DealCard deal={dealWithBlockers} />);

    expect(screen.getByTitle('Has blockers')).toBeInTheDocument();
  });

  it('does not show blocker indicator when deal has no blockers', () => {
    const dealWithoutBlockers = deals.find((d) => d.blockers.length === 0)!;
    renderWithRouter(<DealCard deal={dealWithoutBlockers} />);

    expect(screen.queryByTitle('Has blockers')).not.toBeInTheDocument();
  });
});

describe('DealDetail', () => {
  it('renders deal not found for invalid id', () => {
    render(
      <MemoryRouter initialEntries={['/app/pipeline/999']}>
        <DealDetail />
      </MemoryRouter>,
    );
    expect(screen.getByText('Deal not found.')).toBeInTheDocument();
  });
});

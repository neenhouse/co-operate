import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

import CapitalPage from '../pages/CapitalPage';
import LenderCard from '../components/capital/LenderCard';
import EligibilityBadge from '../components/capital/EligibilityBadge';
import { getEligibility } from '../components/capital/eligibility';
import { lenders, capitalApplications, deals } from '../data/mockData';
import type { Deal, Lender } from '../data/mockData';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('CapitalPage', () => {
  it('renders the capital matching heading', () => {
    renderWithRouter(<CapitalPage />);
    expect(screen.getByRole('heading', { name: 'Capital Matching' })).toBeInTheDocument();
  });

  it('renders the lender directory section', () => {
    renderWithRouter(<CapitalPage />);
    expect(screen.getByRole('heading', { name: 'Lender Directory' })).toBeInTheDocument();
  });

  it('renders the applications section', () => {
    renderWithRouter(<CapitalPage />);
    expect(screen.getByRole('heading', { name: 'Applications' })).toBeInTheDocument();
  });

  it('renders all lenders by default', () => {
    renderWithRouter(<CapitalPage />);
    for (const lender of lenders) {
      expect(screen.getAllByText(lender.name).length).toBeGreaterThan(0);
    }
  });

  it('filters lenders by type', () => {
    renderWithRouter(<CapitalPage />);

    const cdfiButton = screen.getByRole('button', { name: 'CDFI' });
    fireEvent.click(cdfiButton);

    const cdfiLenders = lenders.filter((l) => l.type === 'cdfi');
    const nonCdfiLenders = lenders.filter((l) => l.type !== 'cdfi');

    for (const lender of cdfiLenders) {
      // CDFI lenders should have heading present in directory
      const headings = screen.getAllByRole('heading', { name: lender.name });
      expect(headings.length).toBeGreaterThan(0);
    }
    for (const lender of nonCdfiLenders) {
      // Non-CDFI lenders should not appear as headings in directory
      // They may still appear in the applications table
      const headings = screen.queryAllByRole('heading', { name: lender.name });
      expect(headings).toHaveLength(0);
    }
  });

  it('renders application rows with deal and lender names', () => {
    renderWithRouter(<CapitalPage />);

    for (const app of capitalApplications) {
      const deal = deals.find((d) => d.id === app.dealId);
      const lender = lenders.find((l) => l.id === app.lenderId);
      if (deal) {
        expect(screen.getAllByText(deal.businessName).length).toBeGreaterThan(0);
      }
      if (lender) {
        expect(screen.getAllByText(lender.name).length).toBeGreaterThan(0);
      }
    }
  });

  it('shows application statuses', () => {
    renderWithRouter(<CapitalPage />);
    expect(screen.getByText('Approved')).toBeInTheDocument();
    expect(screen.getByText('Under Review')).toBeInTheDocument();
    expect(screen.getByText('Declined')).toBeInTheDocument();
    expect(screen.getByText('Draft')).toBeInTheDocument();
  });
});

describe('LenderCard', () => {
  it('renders lender details', () => {
    const lender = lenders[0];
    renderWithRouter(<LenderCard lender={lender} />);

    expect(screen.getByText(lender.name)).toBeInTheDocument();
    expect(screen.getByText(lender.interestRange)).toBeInTheDocument();
  });

  it('shows lender type badge', () => {
    const lender = lenders[0]; // CDFI type
    renderWithRouter(<LenderCard lender={lender} />);
    expect(screen.getByText('CDFI')).toBeInTheDocument();
  });

  it('shows national coverage for national lenders', () => {
    const nationalLender = lenders.find((l) => l.states === 'national')!;
    renderWithRouter(<LenderCard lender={nationalLender} />);
    expect(screen.getByText('National')).toBeInTheDocument();
  });

  it('shows state list for regional lenders', () => {
    const regionalLender = lenders.find((l) => l.states !== 'national')!;
    renderWithRouter(<LenderCard lender={regionalLender} />);
    const stateList = (regionalLender.states as string[]).join(', ');
    expect(screen.getByText(stateList)).toBeInTheDocument();
  });
});

describe('EligibilityBadge', () => {
  it('renders match badge', () => {
    render(<EligibilityBadge level="match" />);
    expect(screen.getByText('Match')).toBeInTheDocument();
  });

  it('renders partial badge', () => {
    render(<EligibilityBadge level="partial" />);
    expect(screen.getByText('Partial')).toBeInTheDocument();
  });

  it('renders no-match badge', () => {
    render(<EligibilityBadge level="no-match" />);
    expect(screen.getByText('No Match')).toBeInTheDocument();
  });
});

describe('getEligibility', () => {
  const baseDeal: Deal = {
    id: 'test',
    businessName: 'Test Biz',
    industry: 'Food & Beverage',
    location: { city: 'Portland', state: 'OR' },
    stage: 'financing',
    ownerName: 'Test Owner',
    workerCount: 10,
    estimatedValue: '$500K',
    startDate: '2025-01-01',
    targetCloseDate: '2026-01-01',
    stakeholders: [],
    documents: [],
    compliance: [],
    blockers: [],
    notes: '',
  };

  const baseLender: Lender = {
    id: 'test-lender',
    name: 'Test Lender',
    type: 'cdfi',
    description: 'Test',
    minDeal: 100000,
    maxDeal: 1000000,
    states: ['OR'],
    industries: ['Food & Beverage'],
    interestRange: '5%',
    termRange: '5 years',
    requirements: [],
  };

  it('returns match when all criteria pass', () => {
    const result = getEligibility(baseDeal, baseLender);
    expect(result).toBe('match');
  });

  it('returns partial when state does not match', () => {
    const lender = { ...baseLender, states: ['TX'] as string[] };
    const result = getEligibility(baseDeal, lender);
    expect(result).toBe('partial');
  });

  it('returns partial when deal size is out of range', () => {
    const lender = { ...baseLender, minDeal: 1000000, maxDeal: 5000000 };
    const result = getEligibility(baseDeal, lender);
    expect(result).toBe('partial');
  });

  it('returns partial when industry does not match', () => {
    const lender = { ...baseLender, industries: ['Tech'] as string[] };
    const result = getEligibility(baseDeal, lender);
    expect(result).toBe('partial');
  });

  it('returns no-match when no criteria pass', () => {
    const lender: Lender = {
      ...baseLender,
      minDeal: 1000000,
      maxDeal: 5000000,
      states: ['TX'] as string[],
      industries: ['Tech'] as string[],
    };
    const result = getEligibility(baseDeal, lender);
    expect(result).toBe('no-match');
  });

  it('matches national lenders to any state', () => {
    const lender = { ...baseLender, states: 'national' as const };
    const result = getEligibility(baseDeal, lender);
    expect(result).toBe('match');
  });

  it('matches lenders accepting all industries', () => {
    const lender = { ...baseLender, industries: 'all' as const };
    const result = getEligibility(baseDeal, lender);
    expect(result).toBe('match');
  });

  it('correctly parses $1.2M estimated value', () => {
    const deal = { ...baseDeal, estimatedValue: '$1.2M' };
    const lender = { ...baseLender, minDeal: 1000000, maxDeal: 5000000 };
    const result = getEligibility(deal, lender);
    expect(result).toBe('match');
  });

  it('checks actual deal-lender combinations from mock data', () => {
    // Sunrise Bakery (OR, $1.2M, Food & Beverage) vs Shared Capital (national, $100K-$5M, all)
    const sunriseBakery = deals.find((d) => d.id === '1')!;
    const sharedCapital = lenders.find((l) => l.id === 'l1')!;
    expect(getEligibility(sunriseBakery, sharedCapital)).toBe('match');

    // GreenLeaf Landscaping (TX, $850K) vs Colorado Enterprise Fund (CO, $10K-$250K)
    const greenLeaf = deals.find((d) => d.id === '2')!;
    const coloradoFund = lenders.find((l) => l.id === 'l6')!;
    // State mismatch (TX vs CO) + size out of range ($850K > $250K) = partial (industry matches via 'all')
    const greenLeafResult = getEligibility(greenLeaf, coloradoFund);
    expect(greenLeafResult).toBe('partial');
  });
});

describe('Mock data integrity', () => {
  it('has at least 6 lenders', () => {
    expect(lenders.length).toBeGreaterThanOrEqual(6);
  });

  it('has at least 4 capital applications', () => {
    expect(capitalApplications.length).toBeGreaterThanOrEqual(4);
  });

  it('all applications reference valid deals', () => {
    for (const app of capitalApplications) {
      const deal = deals.find((d) => d.id === app.dealId);
      expect(deal).toBeDefined();
    }
  });

  it('all applications reference valid lenders', () => {
    for (const app of capitalApplications) {
      const lender = lenders.find((l) => l.id === app.lenderId);
      expect(lender).toBeDefined();
    }
  });

  it('contains expected application statuses', () => {
    const statuses = capitalApplications.map((a) => a.status);
    expect(statuses).toContain('approved');
    expect(statuses).toContain('under-review');
    expect(statuses).toContain('declined');
    expect(statuses).toContain('draft');
  });
});

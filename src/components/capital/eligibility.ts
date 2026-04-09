import type { Deal, Lender } from '../../data/mockData';

export type EligibilityLevel = 'match' | 'partial' | 'no-match';

function parseDealValue(estimatedValue: string): number {
  const cleaned = estimatedValue.replace(/[$,]/g, '');
  const match = cleaned.match(/^([\d.]+)\s*([KkMm]?)$/);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  const suffix = match[2].toUpperCase();
  if (suffix === 'K') return num * 1000;
  if (suffix === 'M') return num * 1000000;
  return num;
}

export function getEligibility(deal: Deal, lender: Lender): EligibilityLevel {
  let criteria = 0;

  // Deal size check
  const dealValue = parseDealValue(deal.estimatedValue);
  if (dealValue >= lender.minDeal && dealValue <= lender.maxDeal) {
    criteria++;
  }

  // State coverage check
  if (lender.states === 'national' || lender.states.includes(deal.location.state)) {
    criteria++;
  }

  // Industry match check
  if (lender.industries === 'all' || lender.industries.includes(deal.industry)) {
    criteria++;
  }

  if (criteria === 3) return 'match';
  if (criteria >= 1) return 'partial';
  return 'no-match';
}

import { getQuarter, subMonths } from 'date-fns';

export function stringifyQuarter(date: Date): string {
  const quarter = getQuarter(date);
  return `q${quarter}-${date.getFullYear()}`;
}

export function getLatestQuarterDate(): Date {
  const today = new Date();
  return subMonths(today, 3);
}

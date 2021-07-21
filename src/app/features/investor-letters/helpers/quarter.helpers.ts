import { getQuarter } from 'date-fns';

export function stringifyQuarter(date: Date): string {
  const quarter = getQuarter(date);
  return `q${quarter}-${date.getFullYear()}`;
}

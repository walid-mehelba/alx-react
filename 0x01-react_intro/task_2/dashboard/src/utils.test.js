import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils.js functions', () => {
  test('getFullYear returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  test('getFooterCopy returns ALX when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('ALX');
  });

  test('getFooterCopy returns ALX main dashboard when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
  });

  test('getLatestNotification returns the expected HTML string', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

import { beforeAll, describe, expect, it, vi } from 'vitest';
import { getUniqTime } from '.';

beforeAll(() => {
  vi.useFakeTimers();
});

describe('getUniqTime', () => {
  it('should return a unique time when called multiple times at the same time', () => {
    vi.setSystemTime(new Date('2023-08-07T09:00:00Z'));

    const time1 = getUniqTime();
    const time2 = getUniqTime();

    expect(time1).not.toBe(time2);
  });
});

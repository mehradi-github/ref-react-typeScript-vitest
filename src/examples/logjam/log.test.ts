import { test, expect, vi } from 'vitest';
import { log } from './log';

test('it spies on the multiply method', () => {
  const mock = vi.fn((x?: string) => {
    if (x) return x.repeat(3);
  });
  const result = mock('wow');

  vi.spyOn(console, 'log').mockImplementation(() => {});
  log('log', 1, 2, 3);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith('wow');
  expect(result).toMatchInlineSnapshot('"wowwowwow"');

  expect(console.log).toHaveBeenCalledWith(1, 2, 3);
});

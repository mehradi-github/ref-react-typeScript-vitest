import { test, expect, vi } from 'vitest';

test('it spies on the multiply method', () => {
  const mock = vi.fn((x?: string) => {
    if (x) return x.repeat(3);
  });
  const result = mock('wow');
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith('wow');
  expect(result).toMatchInlineSnapshot('"wowwowwow"');
});

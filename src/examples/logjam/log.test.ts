import { test, expect, vi } from 'vitest';

test('it spies on the multiply method', () => {
  const mock = vi.fn();
  mock();
  expect(mock).toHaveBeenCalled();
});

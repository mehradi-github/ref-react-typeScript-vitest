// @vitest-environment happy-dom
import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
});

test('it should increment when the "Increment" button is pressed', async () => {
  render(<Counter />);
  // screen.debug();
  const currentCount = screen.getByTestId('current-count');
  expect(currentCount.textContent).toBe('0');
  const botton = screen.getByRole('button', { name: 'Increment' });
  fireEvent.click(botton);
  expect(currentCount.textContent).toBe('1');
});

// @vitest-environment happy-dom
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

test('it should render the component', () => {
  render(<Counter />);
});

test.todo(
  'it should increment when the "Increment" button is pressed',
  async () => {},
);

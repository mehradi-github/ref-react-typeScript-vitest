import userEvent from '@testing-library/user-event';
import { render as renderComponent } from '@testing-library/react';

export const render = (
  ui: React.ReactElement,
  options?: Parameters<typeof renderComponent>[1],
) => {
  return {
    ...renderComponent(ui, options),
    user: userEvent.setup(),
  };
};

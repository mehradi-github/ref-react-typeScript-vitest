import { render, screen, waitFor } from 'test/utilities';
import PackingList from '.';

it('renders the Packing List application', () => {
  render(<PackingList />);
});

it('has the correct title', async () => {
  render(<PackingList />);
  screen.getByText('Packing List');
});

it('has an input field for a new item', () => {
  render(<PackingList />);
  screen.getByLabelText('New Item Name');
});

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', {
    name: 'Add New Item',
  });

  expect(newItemInput).toHaveValue('');
  expect(addNewItemButton).toBeDefined();
});

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');

  expect(addNewItemButton).toBeEnabled();
});

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText<HTMLInputElement>('New Item Name');
  const addNewItemButton = screen.getByRole<HTMLButtonElement>('button', {
    name: 'Add New Item',
  });

  await user.type(newItemInput, 'MacBook Pro');
  await user.click(addNewItemButton);

  expect(screen.getByLabelText('MacBook Pro')).not.toBeChecked();
});
it.only('Remove an item', async () => {
  const { user } = render(<PackingList />);
  const newItemInput = screen.getByLabelText('New Item Name');
  const addNewItemButton = screen.getByRole('button', { name: 'Add New Item' });
  await user.type(newItemInput, 'MacBook');
  await user.click(addNewItemButton);

  const removeButton = screen.getByLabelText(/Remove/i);
  await user.click(removeButton);
  waitFor(() => expect(removeButton).not.toBeInTheDocument());
});

it.todo(
  'adds a new item to the unpacked item list when the clicking "Add New Item"',
  async () => {},
);

import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    {
      name: 'test1',
      email: 'test1@test.com',
    },
    {
      name: 'test2',
      email: 'test2@test.com',
    },
  ];
  render(<UserList users={users} />);

  return { users };
}

test('render one row per user', () => {
  // 1. Render the compnent.
  renderComponent();

  // 2. Find all the rows in the table.
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  // 3. Assertion- make sure that we have a currect number of rows in the table.
  expect(rows).toHaveLength(2);
});

test('render name and email of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});

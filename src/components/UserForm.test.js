import { render, screen } from '@testing-library/react';
import { user } from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
  // 1. render the component.
  render(<UserForm />);

  // 2. Manipulate the component or find an element on it.
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // 3. Assertion - make sure the component is doing what
  // we expect to do.
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

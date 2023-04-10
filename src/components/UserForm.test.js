import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
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

test('it calls onUserAdd when the form is submitted', async () => {
  const moke = jest.fn();

  // 1. render the component.
  render(<UserForm onUserAdd={moke} />);

  // 2. Find the two inputs.
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /enter email/i });

  // 3. Simulate typing in a name
  await user.click(nameInput);
  await user.keyboard('jane');

  // 4. Simulate typing in a email
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  // 5. Find the button
  const button = screen.getByRole('button');

  // 6. Simulate clicking the button
  await user.click(button);

  // 7. Assertion - make sure 'OnUserAdd' gets called with email/name
  expect(moke).toHaveBeenCalled();
  expect(moke).toHaveBeenCalledWith({ name: 'jane', email: 'jane@jane.com' });
});

test('empties the two inputs when form submitted', async () => {
  render(<UserForm onUserAdd={() => {}} />);
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /enter email/i });
  const button = screen.getByRole('button');

  await user.click(nameInput);
  await user.keyboard('jane');
  await user.click(emailInput);
  await user.keyboard('jane@jane.com');

  await user.click(button);

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});

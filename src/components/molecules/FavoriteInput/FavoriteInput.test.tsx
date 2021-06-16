import { render, screen } from 'helpers/test-utils';

import userEvent from '@testing-library/user-event';

import FavoriteInput from './FavoriteInput';

describe('FavoriteInput', () => {
  test('should renders the component without errors', () => {
    render(<FavoriteInput />);

    screen.getByText(/waluty/i);
    screen.getByText(/dodaj/i);
  });

  test('should have provided lowercase value in input element', () => {
    render(<FavoriteInput />);

    const input = screen.getByPlaceholderText(/usd/i);

    userEvent.type(input, 'USD');
    expect(input).toHaveValue('usd');
    expect(input).not.toHaveValue('USD');
  });

  test('should button be disable if input.value.length is higher or minor than 3', () => {
    render(<FavoriteInput />);

    const input = screen.getByPlaceholderText(/usd/i);
    const button = screen.getByRole('button', { name: /dodaj/i });
    expect(button).toBeDisabled();
    userEvent.type(input, 'USD');
    expect(button).not.toBeDisabled();
    userEvent.type(input, 'USDS');
    expect(button).toBeDisabled();
  });

  test('should reset input value after submit', () => {
    render(<FavoriteInput />);

    const input = screen.getByPlaceholderText(/usd/i);
    const button = screen.getByRole('button', { name: /dodaj/i });

    userEvent.type(input, 'USD');
    userEvent.click(button);
    expect(input).toHaveValue('');
  });
});

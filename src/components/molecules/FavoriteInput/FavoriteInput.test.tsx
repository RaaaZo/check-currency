import { render, screen } from 'helpers/test-utils';
import FavoriteInput from './FavoriteInput';

import userEvent from '@testing-library/user-event';

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
});

import { render, screen } from 'helpers/test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import FavoriteError from './FavoriteError';

describe('ContentHeader', () => {
  test('should renders the component without errors', () => {
    render(<FavoriteError />);

    screen.getByText(/Nie posiadasz żadnych ulubionych walut/i);
    screen.getByText(/Znajdź je tu!/i);
  });
  test('should push to the main page', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <FavoriteError />
      </Router>
    );

    history.push('/something');

    const button = screen.getByText(/Znajdź je tu!/i);
    userEvent.click(button);

    expect(history.location.pathname).toBe('/');
  });
});

import { render, screen } from 'helpers/test-utils';
import Navigation from './Navigation';

import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Navigation', () => {
  test('should renders without errors', () => {
    render(<Navigation />);

    screen.getByText(/ulubione/i);
    screen.getByText(/popularne/i);
    screen.getByText(/check currency/i);
  });
  test('should change location to /favorite after click Favorite Currencies button', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Navigation />
      </Router>
    );

    const link = screen.getByText(/ulubione/i);
    expect(history.location.pathname).toBe('/');
    userEvent.click(link);
    expect(history.location.pathname).toBe('/ulubione');
  });
});

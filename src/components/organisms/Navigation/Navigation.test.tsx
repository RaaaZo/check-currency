import { render, screen } from 'helpers/test-utils';
import Navigation from './Navigation';

import { createMemoryHistory } from 'history';

import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Navigation', () => {
  test('should renders without errors', () => {
    render(<Navigation />);

    screen.getByText(/all currencies/i);
    screen.getByText(/favorite currencies/i);
    screen.getByText(/check currency/i);
  });
  test('should change location to /favorite after click Favorite Currencies button', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <Navigation />
      </Router>
    );

    const link = screen.getByText(/favorite currencies/i);
    expect(history.location.pathname).toBe('/');
    userEvent.click(link);
    expect(history.location.pathname).toBe('/favorite');
  });
});

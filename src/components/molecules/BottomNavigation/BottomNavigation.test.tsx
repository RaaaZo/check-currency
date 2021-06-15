import BottomNavigation from './BottomNavigation';
import { render, screen } from 'helpers/test-utils';

import { createMemoryHistory } from 'history';

import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';

describe('BottomNavigation', () => {
  test('should renders without error', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <BottomNavigation />
      </Router>
    );

    screen.getByText(/all/i);
    screen.getByText(/favorite/i);
  });

  test('should push to /favorite location after click on button', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <BottomNavigation />
      </Router>
    );

    const button = screen.getByText(/favorite/i);
    expect(history.location.pathname).toBe('/');
    userEvent.click(button);
    expect(history.location.pathname).toMatch(/favorite/i);
  });
});

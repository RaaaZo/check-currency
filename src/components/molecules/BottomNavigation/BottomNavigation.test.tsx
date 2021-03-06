import { render, screen } from 'helpers/test-utils';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

import BottomNavigation from './BottomNavigation';

describe('BottomNavigation', () => {
  test('should renders without error', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <BottomNavigation />
      </Router>
    );

    screen.getByText(/popularne/i);
    screen.getByText(/ulubione/i);
  });

  test('should push to /favorite location after click on button', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <BottomNavigation />
      </Router>
    );

    const button = screen.getByText(/ulubione/i);
    expect(history.location.pathname).toBe('/');
    userEvent.click(button);
    expect(history.location.pathname).toMatch(/ulubione/i);
  });
});

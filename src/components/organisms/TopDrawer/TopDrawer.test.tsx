import { render, screen } from 'helpers/test-utils';
import TopDrawer from './TopDrawer';

describe('TopDrawer', () => {
  test('should renders the component without errors', () => {
    render(<TopDrawer />);

    screen.getByText(/dodaj walutę/i);
    screen.getByText('Dodaj');
    screen.getByPlaceholderText(/pln/i);
  });
});

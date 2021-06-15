import { render, screen } from 'helpers/test-utils';
import TopDrawer from './TopDrawer';

describe('TopDrawer', () => {
  test('should renders the component without errors', () => {
    render(<TopDrawer />);

    screen.getByText(/add currency/i);
    screen.getByText('Add');
    screen.getByPlaceholderText(/pln/i);
  });
});

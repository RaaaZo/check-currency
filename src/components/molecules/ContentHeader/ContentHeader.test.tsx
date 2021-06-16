import { render, screen } from 'helpers/test-utils';

import ContentHeader from './ContentHeader';

describe('ContentHeader', () => {
  test('should renders the component without errors', () => {
    render(<ContentHeader header='Lorem ipsum' effectiveDate='2021-06-12' />);

    screen.getByText(/lorem ipsum/i);
    screen.getByText(/2021-06-12/i);
  });
  test('should renders the component with delete all badge when no effectiveDate props is provided', () => {
    render(<ContentHeader header='Lorem ipsum' />);

    screen.getByText(/lorem ipsum/i);
    expect(screen.queryByText(/2021-06-12/i)).not.toBeInTheDocument();
    screen.getByText(/usuń wszystkie/i);
  });
});

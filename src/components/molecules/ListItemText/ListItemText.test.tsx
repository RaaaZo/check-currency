import { render, screen, waitFor } from 'helpers/test-utils';

import userEvent from '@testing-library/user-event';

import ListItemText from './ListItemText';

describe('ContentHeader', () => {
  test('should renders the component without errors', async () => {
    render(
      <ListItemText placement='bottom-end' text='Los solor' title='Lorem' />
    );

    const text = screen.getByText(/Los solor/i);
    expect(text).toBeInTheDocument();
    userEvent.hover(text);
    await screen.findByText(/lorem/i);
    userEvent.unhover(text);
    await waitFor(() =>
      expect(screen.queryByText(/lorem/i)).not.toBeInTheDocument()
    );
  });
  test('should push to the main page', async () => {
    render(
      <ListItemText
        placement='bottom-end'
        text='Los solor'
        title='Lorem'
        secondTitle='lorem again'
        secondText='lorem second text'
      />
    );

    const text = screen.getByText(/lorem second text/i);
    expect(text).toBeInTheDocument();
    userEvent.hover(text);
    await screen.findByText(/lorem again/i);
    userEvent.unhover(text);
    await waitFor(() =>
      expect(screen.queryByText(/lorem again/i)).not.toBeInTheDocument()
    );
  });
});

import { theme } from 'assets/styles/theme';
import { ModalProvider } from 'hooks/useModal';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store/store/store';

import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const AllProviders: React.FC = ({ children }) => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ModalProvider>{children}</ModalProvider>
        </ThemeProvider>
      </Provider>
    </Router>
  );
};

export default AllProviders;

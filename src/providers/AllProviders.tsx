import { theme } from 'assets/styles/theme';

import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

const AllProviders: React.FC = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Router>
  );
};

export default AllProviders;

import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          fontSize: '62.5%',
        },
        body: {
          fontSize: '1.6rem',
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

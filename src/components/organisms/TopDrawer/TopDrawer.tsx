import FavoriteInput from 'components/molecules/FavoriteInput/FavoriteInput';

import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const TopDrawer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position='fixed'>
      <Grid
        className={classes.contentWrapper}
        container
        justify='center'
        alignItems='center'
      >
        <Typography
          className={classes.typography}
          align='center'
          variant='h6'
          component='h2'
          display='block'
        >
          Dodaj Walutę Do Ulubionych
        </Typography>

        <FavoriteInput />
      </Grid>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      height: 130,
      left: 0,
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,

      [theme.breakpoints.up('md')]: {
        left: 240,
      },
    },
    contentWrapper: {
      height: '100%',

      [theme.breakpoints.up('md')]: {
        paddingRight: 240,
      },
    },
    typography: {
      width: '100%',
    },
  })
);

export default TopDrawer;

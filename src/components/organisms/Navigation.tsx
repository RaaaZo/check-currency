import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { NavLink, Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawerWidth}
      classes={{ paper: classes.drawerWidth }}
      variant='permanent'
    >
      <Grid
        className={classes.logoWrapper}
        container
        justify='flex-end'
        alignItems='center'
      >
        <Grid item xs={12}>
          <Typography
            className={classes.logoLink}
            component={RouterLink}
            to='/'
            variant='h6'
            align='right'
          >
            Check Currency
          </Typography>
        </Grid>
      </Grid>

      <Link exact className={classes.link} component={NavLink} to='/'>
        All Currencies
      </Link>
      <Link className={classes.link} component={NavLink} to='/favorite'>
        Favorite Currencies
      </Link>
    </Drawer>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerWidth: {
      display: 'none',
      width: 240,

      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    logoWrapper: {
      margin: '3rem 0',
      height: 100,
      padding: '2.5rem 1rem ',
      backgroundColor: theme.palette.grey[800],
    },
    logoLink: {
      display: 'block',
      color: theme.palette.getContrastText(theme.palette.grey[800]),
      textAlign: 'right',
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out',

      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    link: {
      paddingRight: '1rem',
      margin: '1rem 0',
      color: theme.palette.common.black,
      fontSize: '2rem',
      textAlign: 'right',
      textDecoration: 'none',
      transition: 'color 0.3s ease-in-out',

      '&:hover': {
        color: theme.palette.secondary.main,
      },
      '&.active': {
        color: theme.palette.secondary.main,
      },
    },
  })
);

export default Navigation;

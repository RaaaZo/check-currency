import { Link as RouterLink } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const FavoriteError = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.wrapper}
      container
      justify='center'
      alignItems='center'
      direction='column'
    >
      <Typography className={classes.text} component='h5'>
        Nie posiadasz żadnych ulubionych walut
      </Typography>
      <Link
        className={`${classes.link} ${classes.text}`}
        component={RouterLink}
        to='/'
      >
        Znajdź je tu!
      </Link>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'absolute',
      top: 'calc(50% + 65px)',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      [theme.breakpoints.up('md')]: {
        left: 'calc(50% + 120px)',
        maxWidth: 'calc(100% - 240px)',
      },
    },
    text: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.7rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
      },
    },
    link: {
      paddingTop: '0.5rem',
      color: theme.palette.secondary.main,
      transition: 'transform 0.2s linear',
      '&:hover': {
        textDecoration: 'none',
        transform: 'scale(1.1)',
      },
    },
  })
);

export default FavoriteError;

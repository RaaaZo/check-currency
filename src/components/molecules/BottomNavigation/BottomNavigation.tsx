import { useHistory } from 'react-router-dom';

import Navigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';

const BottomNavigation = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <Navigation showLabels className={classes.wrapper}>
      <BottomNavigationAction
        onClick={() => push('/')}
        label='Popularne'
        icon={<WhatshotOutlinedIcon />}
        className={classes.button}
      />
      <BottomNavigationAction
        onClick={() => push('/ulubione')}
        label='Ulubione'
        icon={<FavoriteBorderIcon />}
        className={classes.button}
      />
    </Navigation>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '100%',

      '& span': {
        fontWeight: theme.typography.fontWeightBold,
      },

      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    button: {
      transition: 'color 0.3s ease-in-out',

      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
  })
);

export default BottomNavigation;

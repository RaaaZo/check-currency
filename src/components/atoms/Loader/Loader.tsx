import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress
        className={classes.loader}
        color='secondary'
        size={80}
      />
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loaderWrapper: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.grey[300],
    },
    loader: {
      marginTop: 65,
      [theme.breakpoints.up('md')]: {
        marginLeft: 120,
      },
    },
  })
);

export default Loader;

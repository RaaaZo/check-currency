import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  message: string;
}

const FetchError: React.FC<Props> = ({ message }) => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.wrapper}
      container
      item
      xs={12}
      direction='column'
      justify='center'
      alignItems='center'
    >
      <Typography variant='h5' component='h3'>
        Błąd
      </Typography>
      <Typography variant='h6' component='h4' align='justify'>
        {message}
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      height: 'calc(100vh - 130px - 30px)',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      '& h3': {
        paddingBottom: '2rem',
      },
      [theme.breakpoints.down('md')]: {
        height: 'calc(100vh - 130px - 30px - 60px)',
      },
    },
  })
);

export default FetchError;

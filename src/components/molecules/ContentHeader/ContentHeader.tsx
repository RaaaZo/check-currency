import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  header: string;
  effectiveDate: string;
}

const ContentHeader: React.FC<Props> = ({ effectiveDate, header }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container item xs={12} justify='center' direction='column'>
        <Typography align='center' variant='h6' component='h3'>
          {header}
        </Typography>
        <Typography
          className={classes.typography}
          align='center'
          variant='h6'
          component='h3'
        >
          Na dzień: {effectiveDate}
        </Typography>
      </Grid>
      <Divider />
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      marginTop: '0.5rem',
      marginBottom: '1rem',
    },
  })
);

export default ContentHeader;

import { useModal } from 'hooks/useModal';
import { useAppSelector } from 'hooks/useRedux';

import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

interface Props {
  header: string;
  effectiveDate?: string;
}

const ContentHeader: React.FC<Props> = ({ effectiveDate, header }) => {
  const classes = useStyles();

  const favorites = useAppSelector((state) => state.favorites.favorites);
  const { openModal, setIsRemoveAll } = useModal();

  const openDeleteAllModal = () => {
    if (favorites.length === 0) return;
    setIsRemoveAll(true);
    openModal();
  };

  return (
    <Grid
      container
      item
      xs={12}
      justify='center'
      alignItems='center'
      direction='column'
    >
      <Typography align='center' variant='h6' component='h3'>
        {header}
      </Typography>
      {effectiveDate ? (
        <Typography
          className={classes.padding}
          align='center'
          variant='h6'
          component='h3'
        >
          Na dzień: {effectiveDate}
        </Typography>
      ) : (
        <Badge
          badgeContent={favorites.length}
          className={classes.badge}
          color='secondary'
          showZero
          onClick={openDeleteAllModal}
        >
          <Button className={classes.button}>Usuń wszystkie</Button>
        </Badge>
      )}
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    padding: {
      paddingTop: '2rem',
      paddingBottom: '1rem',
    },
    button: {
      color: theme.palette.grey[500],
      marginTop: '3rem',
      transition: 'all 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
      },
    },
    badge: {
      cursor: 'pointer',

      '& span': {
        top: 18,
        right: -8,
      },
    },
  })
);

export default ContentHeader;

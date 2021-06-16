import ListItemText from 'components/molecules/ListItemText/ListItemText';
import { useModal } from 'hooks/useModal';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { addToFavorites, getCurrencyCode } from 'store/reducers/favorites';

import ListItemMUI from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface Props {
  mid: number;
  currency: string;
  code: string;
}

const ListItem: React.FC<Props> = ({ currency, code, mid }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const { openModal } = useModal();

  const midRounded = `${Math.round(mid * 100) / 100} PLN`;

  const uppercaseCurrency = currency.toUpperCase();

  const isFavorite = () => favorites.find((item) => item.code === code);

  const addToFavoritesHandler = () =>
    dispatch(addToFavorites({ code, currency, mid }));

  const openDeleteModal = () => {
    dispatch(getCurrencyCode(code));
    openModal();
  };

  return (
    <>
      <ListItemMUI divider key={currency}>
        <ListItemText
          xs={6}
          sm={6}
          md={4}
          direction='column'
          placement='left-start'
          title='Nazwa waluty'
          secondTitle='Kod waluty'
          secondText={code}
          text={uppercaseCurrency}
        />

        <ListItemText
          xs={3}
          sm={3}
          md={4}
          placement='top'
          title='Średnia wartość (PLN)'
          text={midRounded}
        />

        <ListItemText
          xs={3}
          sm={3}
          md={4}
          placement='top'
          title='Ulubione'
          text={
            isFavorite() ? (
              <FavoriteIcon
                className={classes.cursor}
                onClick={openDeleteModal}
                color='secondary'
              />
            ) : (
              <FavoriteBorderIcon
                onClick={addToFavoritesHandler}
                className={`${classes.icon} ${classes.cursor}`}
              />
            )
          }
        />
      </ListItemMUI>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      transition: 'color 0.3s ease-in-out',
      '&:hover': {
        color: theme.palette.secondary.main,
      },
    },
    cursor: {
      cursor: 'pointer',
    },
  })
);

export default ListItem;

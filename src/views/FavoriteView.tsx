import ContentHeader from 'components/molecules/ContentHeader/ContentHeader';
import FavoriteError from 'components/molecules/FavoriteError/FavoriteError';
import ListItem from 'components/organisms/ListItem/ListItem';
import { useAppSelector } from 'hooks/useRedux';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const FavoriteView = () => {
  const classes = useStyles();
  const { favorites } = useAppSelector((state) => state.favorites);

  return (
    <>
      <Grid className={classes.wrapper} container>
        <ContentHeader header='Twoje ulubione kursy walut' />

        <Grid item xs={12}>
          {favorites.length === 0 ? (
            <FavoriteError />
          ) : (
            <List className={classes.list}>
              {favorites.map(({ mid, code, currency }) => (
                <ListItem
                  mid={mid}
                  code={code}
                  currency={currency}
                  key={currency}
                />
              ))}
            </List>
          )}
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: '3rem 0 0 0',
    },
    list: {
      height: '100%',
    },
  })
);

export default FavoriteView;

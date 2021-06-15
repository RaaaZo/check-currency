import ContentHeader from 'components/molecules/ContentHeader/ContentHeader';
import ListItem from 'components/organisms/ListItem/ListItem';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchCurrencies } from 'store/reducers/currencies';

import { useEffect } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const PopularCurrencyView = () => {
  const classes = useStyles();
  const { currencies, status, effectiveDate } = useAppSelector(
    (state) => state.currencies
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading</div>;
  } else if (status === 'failed') {
    return <div>Error</div>;
  }

  return (
    <>
      <Grid className={classes.wrapper} container direction='column'>
        <ContentHeader
          effectiveDate={effectiveDate}
          header='Najpopularniejsze kursy walut'
        />

        <List className={classes.list}>
          {currencies.map(({ ask, bid, code, currency }) => (
            <ListItem
              ask={ask}
              bid={bid}
              code={code}
              currency={currency}
              key={currency}
            />
          ))}
        </List>
      </Grid>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      padding: '3rem 0',
    },
    list: {
      height: '100%',
    },
    favoriteIcon: {
      cursor: 'pointer',
    },
  })
);

export default PopularCurrencyView;

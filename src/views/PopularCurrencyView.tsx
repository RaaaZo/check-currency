import ContentHeader from 'components/molecules/ContentHeader/ContentHeader';
import ListItem from 'components/organisms/ListItem/ListItem';
import Loader from 'components/atoms/Loader/Loader';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { fetchCurrencies } from 'store/reducers/currencies';

import { useEffect } from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';

const PopularCurrencyView = () => {
  const classes = useStyles();
  const { currencies, status, effectiveDate } = useAppSelector(
    (state) => state.currencies
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <Loader />;
  } else if (status === 'failed') {
    return <div>Error</div>;
  }

  return (
    <>
      <Grid className={classes.wrapper} container>
        <ContentHeader
          effectiveDate={effectiveDate}
          header='Najpopularniejsze kursy walut'
        />

        <Grid item xs={12}>
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

export default PopularCurrencyView;

import Loader from 'components/atoms/Loader/Loader';
import ContentHeader from 'components/molecules/ContentHeader/ContentHeader';
import FetchError from 'components/molecules/FetchError/FetchError';
import ListItem from 'components/organisms/ListItem/ListItem';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect } from 'react';
import { fetchCurrencies } from 'store/reducers/currencies';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const PopularCurrencyView = () => {
  const classes = useStyles();
  const { currencies, status, effectiveDate, error } = useAppSelector(
    (state) => state.currencies
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (status === 'loading' || status === 'idle') {
    return <Loader />;
  }

  return (
    <>
      <Grid className={classes.wrapper} container>
        {error ? (
          <FetchError message={error} />
        ) : (
          <>
            <ContentHeader
              effectiveDate={effectiveDate}
              header='Najpopularniejsze kursy walut'
            />

            <Grid item xs={12}>
              <List className={classes.list}>
                {currencies.map(({ mid, code, currency }) => (
                  <ListItem
                    mid={mid}
                    code={code}
                    currency={currency}
                    key={currency}
                  />
                ))}
              </List>
            </Grid>
          </>
        )}
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

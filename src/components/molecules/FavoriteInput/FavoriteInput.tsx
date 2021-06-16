import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import React, { useState } from 'react';
import { fetchCurrencyByCode } from 'store/reducers/favorites';

import { CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SnackbarInfo from '../SnackbarInfo/SnackbarInfo';

const FavoriteInput = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.favorites);

  const [inputValue, setInputValue] = useState<string>('');
  const inputValueLength = inputValue.length;

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchCurrencyByCode(inputValue));
    setInputValue('');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value.toLowerCase());
  };

  return (
    <Grid
      className={classes.innerWrapper}
      container
      justify='center'
      alignItems='center'
    >
      {error && <SnackbarInfo message={error} />}
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <TextField
          className={classes.textField}
          color='secondary'
          variant='filled'
          label='Waluty'
          placeholder='USD, EUR...'
          size='small'
          value={inputValue}
          onChange={changeHandler}
        />

        <Button
          className={classes.button}
          disabled={inputValueLength !== 3 || status === 'loading'}
          type='submit'
          size='large'
          variant='contained'
          color='secondary'
        >
          {status === 'loading' ? (
            <CircularProgress color='secondary' size={30} />
          ) : (
            'Dodaj'
          )}
        </Button>
      </form>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minWidth: '10rem',
    },
    form: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    innerWrapper: {
      width: '100%',
    },
    textField: {
      marginRight: '1rem',

      '& input': {
        fontWeight: theme.typography.fontWeightBold,
      },

      '& label': {
        fontWeight: theme.typography.fontWeightBold,
      },

      [theme.breakpoints.up('sm')]: {
        width: '40%',
        maxWidth: '40rem',
      },
    },
  })
);

export default FavoriteInput;

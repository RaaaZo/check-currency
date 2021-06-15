import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import React from 'react';

const FavoriteInput = () => {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState<string>('');

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
      <TextField
        className={classes.textField}
        color='secondary'
        variant='filled'
        label='Currency'
        placeholder='USD, PLN, EUR...'
        size='small'
        value={inputValue}
        onChange={changeHandler}
      />

      <Button size='large' variant='contained' color='secondary'>
        Add
      </Button>
    </Grid>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
  })
);

export default FavoriteInput;

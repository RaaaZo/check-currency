import React from 'react';
import { useDispatch } from 'react-redux';
import { clearError } from 'store/reducers/favorites';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  message: string;
}

const SnackbarInfo: React.FC<Props> = ({ message }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearError());
  };

  return (
    <Snackbar
      className={classes.snackbar}
      message={message}
      open={!!message}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    snackbar: {
      '& > div': {
        backgroundColor: theme.palette.error.main,
      },
    },
  })
);

export default SnackbarInfo;

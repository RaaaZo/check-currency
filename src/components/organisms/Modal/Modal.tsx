import { Transition } from 'helpers/Transition';
import { useModal } from 'hooks/useModal';
import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  message: string;
  removeFunc: () => void;
}

const Modal: React.FC<Props> = ({ message, removeFunc }) => {
  const { closeModal, isOpen, setIsRemoveAll } = useModal();

  const closeModalHandler = () => {
    setIsRemoveAll(false);
    closeModal();
  };

  return (
    <Dialog
      onClose={closeModalHandler}
      open={isOpen}
      TransitionComponent={Transition}
    >
      <DialogTitle>Jesteś pewien?</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModalHandler} color='secondary'>
          Zamknij
        </Button>
        <Button onClick={removeFunc}>Usuń</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

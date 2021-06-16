import React, { useContext, useState } from 'react';
import { ModalContextInterface } from 'types';

const ModalContext = React.createContext<ModalContextInterface>({
  isOpen: false,
  isRemoveAll: false,
  setIsRemoveAll: () => {},
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRemoveAll, setIsRemoveAll] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isRemoveAll, isOpen, openModal, closeModal, setIsRemoveAll }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw Error('useModal needs to be used inside ModalContext');
  }

  return modalContext;
};

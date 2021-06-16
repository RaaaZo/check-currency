import ContentContainer from 'components/atoms/ContentContainer/ContentContainer';
import BottomNavigation from 'components/molecules/BottomNavigation/BottomNavigation';
import Modal from 'components/organisms/Modal/Modal';
import Navigation from 'components/organisms/Navigation/Navigation';
import TopDrawer from 'components/organisms/TopDrawer/TopDrawer';
import { useModal } from 'hooks/useModal';
import { useAppDispatch } from 'hooks/useRedux';
import { removeAllFromFavorites, removeFromFavorites } from 'store/reducers/favorites';

const MainTemplate: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { closeModal, isRemoveAll, setIsRemoveAll } = useModal();

  const removeOneCurrencyFromFavorites = () => {
    dispatch(removeFromFavorites());
    closeModal();
  };
  const removeAllCurrenciesFromFavorites = () => {
    setIsRemoveAll(false);
    dispatch(removeAllFromFavorites());
    closeModal();
  };

  return (
    <>
      <Navigation />
      <TopDrawer />
      <ContentContainer>{children}</ContentContainer>
      <BottomNavigation />
      {isRemoveAll ? (
        <Modal
          message='Czy na pewno chcesz usunąć wszystkie waluty z ulubionych?'
          removeFunc={removeAllCurrenciesFromFavorites}
        />
      ) : (
        <Modal
          message='Czy na pewno chcesz usunąć walutę z ulubionych?'
          removeFunc={removeOneCurrencyFromFavorites}
        />
      )}
    </>
  );
};

export default MainTemplate;

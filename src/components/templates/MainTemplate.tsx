import ContentContainer from 'components/atoms/ContentContainer/ContentContainer';
import BottomNavigation from 'components/molecules/BottomNavigation/BottomNavigation';
import Navigation from 'components/organisms/Navigation/Navigation';
import TopDrawer from 'components/organisms/TopDrawer/TopDrawer';

const MainTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <TopDrawer />
      <ContentContainer>{children}</ContentContainer>
      <BottomNavigation />
    </>
  );
};

export default MainTemplate;

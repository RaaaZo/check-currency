import ContentContainer from 'components/atoms/ContentContainer';
import BottomNavigation from 'components/molecules/BottomNavigation';
import Navigation from 'components/organisms/Navigation';
import TopDrawer from 'components/organisms/TopDrawer';

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

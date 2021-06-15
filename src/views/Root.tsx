import FavoriteView from './FavoriteView';
import MainTemplate from 'components/templates/MainTemplate';
import AllCurrencyView from './AllCurrencyView';

import { Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path='/'>
          <AllCurrencyView />
        </Route>
        <Route path='/favorite'>
          <FavoriteView />
        </Route>
      </Switch>
    </MainTemplate>
  );
};

export default Root;

import MainTemplate from 'components/templates/MainTemplate';
import { Route, Switch } from 'react-router-dom';

import FavoriteView from './FavoriteView';
import PopularCurrencyView from './PopularCurrencyView';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path='/'>
          <PopularCurrencyView />
        </Route>
        <Route path='/ulubione'>
          <FavoriteView />
        </Route>
      </Switch>
    </MainTemplate>
  );
};

export default Root;

import FavoriteView from './FavoriteView';
import MainTemplate from 'components/templates/MainTemplate';
import PopularCurrencyView from './PopularCurrencyView';

import { Route, Switch } from 'react-router-dom';

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

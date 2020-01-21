import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Layout from './Layout';
import ListPage from './pages/List/List.page';
import ItemPage from './pages/Item/Item.page';
import configureStore, { history } from './store';

import './index.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <Layout>
        <Switch>
          <Route exact path="/">
            <ListPage />
          </Route>
          <Route path="/list/:id">
            <ItemPage />
          </Route>
          <Route path="*">
            <h1>404, page not found</h1>
          </Route>
        </Switch>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

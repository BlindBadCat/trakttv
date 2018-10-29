import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import store from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter path="/">
      <div>
        <Switch>
          <Route path="/:sort/:genre/:page/:query" component={App} />
          <Route path="/:sort/:genre/:page/" component={App} />
          <Redirect from="/" to="/watched/all/1" component={App} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import store from 'store';
import { Provider } from 'react-redux';
import { history } from 'helpers/common';

import 'antd/dist/antd.css';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;

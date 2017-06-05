import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { BrowserRouter, Route } from 'react-router-dom';
import{ Router, Route, IndexRoute, browserHistory } from 'react-router';
import promise from 'redux-promise';

import App from './components/app';
import Home from './components/Home';

import reducers from './reducers';
import Layout from './components/layout/main_page';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

//cons for use redux with promise and middlware
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router history={ browserHistory }>
      <Route path="/" component={ Layout }>
        <IndexRoute component={ Home }/>
        {/* <Route path="/about" component={App}/> */}
      </Route>
    </Router>

  </Provider>
  , document.querySelector('.page'));

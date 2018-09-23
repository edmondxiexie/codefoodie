import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';

import './style/index.scss';

const NavBar = () => {
  return <div>NavBar!</div>;
};

const Footer = () => {
  return <div>Footer!</div>;
};

const Home = () => {
  return <div>Home!</div>;
};

const Detail = () => {
  return <div>Detail!</div>;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

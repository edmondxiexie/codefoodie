import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store/store';

import App from './components/App';
// import reducers from './reducers';

import './style/index.scss';

const NavBar = () => <div>NavBar!</div>;

const Footer = () => <div>Footer!</div>;

const Home = () => <div>Home!</div>;

const Detail = () => <div>Detail!</div>;

const auth = !!localStorage.getItem('x-token');

// test
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, {}, composeEnhancers(applyMiddleware()));

ReactDOM.render(
    <Provider store={ store }>
        <App auth={ auth } />
    </Provider>,
    document.getElementById('app'),
);

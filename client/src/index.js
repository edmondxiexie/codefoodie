import React from 'react';
import ReactDOM from 'react-dom';
import path from 'path';

import App from './components/App';
import './style/index.scss';

import { BrowserRouter, Route } from 'react-router-dom';

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

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/navbar" component={NavBar} />
      <Route path="/footer" component={Footer} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);

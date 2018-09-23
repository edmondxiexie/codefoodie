import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

// import Navbar from './Navbar';
// import Button from './common/Button';
// import Footer from './Footer';

const NavBar = () => {
  return <div>NavBar!</div>;
};

const Footer = () => {
  return <div>Footer!</div>;
};

const Dashboard = () => {
  return <div>Dashboard!</div>;
};

const Detail = () => {
  return <div>Detail!</div>;
};

const Landing = () => {
  return <div>Landing Page</div>;
};

const RecipeHome = () => {
  return <div>RecipeHome</div>;
};

const RecipeNew = () => {
  return <div>RecipeNew</div>;
};

const RecipeDetail = () => {
  return <div>RecipeDetail</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipes" component={RecipeHome} />
            <Route path="/recipes/new" component={RecipeNew} />
            <Route path="/recipes/detail/:id" component={RecipeDetail} />
            <Route path="/dashboard" component={Dashboard} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

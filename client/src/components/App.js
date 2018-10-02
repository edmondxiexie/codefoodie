import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { logoutUtil } from '../utils/authUtil';

import Login from './login/Login';

import Navbar from './Navbar';
// import Button from './common/Button';
// import Footer from './Footer';

// const NavBar = () => {
//   return (
//     <div>
//       NavBar!
//       <button
//         className="btn waves-effect waves-light"
//         name="submit"
//         onClick={() => {
//           logoutUtil();
//         }}
//       >
//         Log out
//       </button>
//     </div>
//   );
// };

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
            <Navbar />
            {`Auth: ${this.props.auth}`}
            <Route exact path="/" component={Landing} />
            <Route exact path="/recipes" component={RecipeHome} />
            <Route path="/recipes/new" component={RecipeNew} />
            <Route path="/recipes/detail/:id" component={RecipeDetail} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

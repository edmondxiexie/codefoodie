import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';

import Navbar from './Navbar';
import Button from './common/Button';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    axios
      .get('api/users')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

export default App;

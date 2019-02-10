import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import { logoutUtil } from '../utils/authUtil';

import Login from './login/Login';

import Navbar from './Navbar';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Hello worldie
            </div>
        );
    }
}

export default App;

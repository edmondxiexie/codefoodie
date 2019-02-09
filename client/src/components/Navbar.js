import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-base">
                <nav>
                    <div className="nav-wrapper brown darken-4">
                        <a href="#" className="brand-logo">
              Code Foodie
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li>
                                <a href="/signup">Sign up</a>
                            </li>
                            <li>
                                <a href="/login">Sign in</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;

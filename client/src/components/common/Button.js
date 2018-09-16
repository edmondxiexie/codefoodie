import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="button"
        onClick={() => {
          console.log('Button Clicked!');
        }}>
        <i className="fas fa-chevron-circle-left" />
        <span>Previous</span>
      </div>
    );
  }
}

export default Button;

import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          className="button"
          onClick={() => {
            console.log('Button Clicked!');
          }}>
          <i className="fas fa-chevron-circle-left" />
          <span>Previous</span>
        </div>
        <div
          className="button"
          onClick={() => {
            console.log('Button Clicked!');
          }}>
          <span>Next</span>
          <i className="fas fa-chevron-circle-right" />
        </div>
      </div>
    );
  }
}

export default Button;

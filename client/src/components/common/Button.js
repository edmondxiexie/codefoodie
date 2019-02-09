import React from 'react';

const Button = () => (
    <div>
        <div
            className="button"
            onClick={ () => {
                console.log('Button Clicked!');
            } }
        >
            <i className="fas fa-chevron-circle-left" />
            <span>Previous</span>
        </div>
        <div
            className="button"
            onClick={ () => {
                console.log('Button Clicked!');
            } }
        >
            <span>Next</span>
            <i className="fas fa-chevron-circle-right" />
        </div>
    </div>
);

export default Button;

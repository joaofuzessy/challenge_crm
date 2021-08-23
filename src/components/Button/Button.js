import React from 'react';

import './Button.scss';

function Button(props) {

    const { text } = props;

    return (
        <div className="Button">
           <button>{text}</button>
        </div>
    )
}

export default Button;
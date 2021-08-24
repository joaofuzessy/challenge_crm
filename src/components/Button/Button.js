import React from 'react';

import './Button.scss';

function Button(props) {

    const { text, disabled, clickAction, children, isIconOnly } = props;

    const handleClick = () => {
        clickAction();
    }
    return (
        <div className={`Button`}>
           <button className={isIconOnly? 'icon' : null} disabled={disabled} onClick={ () => handleClick() }>{children}{text}</button>
        </div>
    )
}

export default Button;
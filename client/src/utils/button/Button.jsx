import React from 'react';

const Button = (props) => {

    let btnClass = ` w-24 rounded-lg ${props.className} ` 

    return (
        <button className={btnClass} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;
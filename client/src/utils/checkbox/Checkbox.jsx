import React from 'react';

const Checkbox = (props) => {
    return (
        <input id={props.single} checked={props.checked} type="checkbox" value="" className={props.className}/>
    );
};

export default Checkbox;
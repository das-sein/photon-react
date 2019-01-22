import './style/components/_button.scss';

import React from 'react';
const classNames = require('classnames');


export default function Button(props) {
    let classes = classNames(
        'button',
        props.primary ? 'button-primary' : 'button-default',
        {
            'button-ghost': props.ghost,
            'button-micro': props.micro,
            'button-puffy': props.puffy
        }
    );
    return (
        <button className={classes} {...props}>
            {props.text}
        </button>
    );
}

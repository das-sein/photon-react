import React from 'react';

const classNames = require('classnames');


export default function CardHeader(props) {
    return (
        <div className={classNames('card-header')}>
            {props.children}
        </div>
    )
}

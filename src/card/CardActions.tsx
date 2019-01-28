import React from 'react';

const classNames = require('classnames');


export default function CardActions(props) {
    return (
        <div className={'card-actions'}>
            {props.children}
        </div>
    );
}

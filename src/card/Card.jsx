import '../style/components/_card.scss';

import React from 'react';

const classNames = require('classnames');


export default function Card(props) {
    let classes = classNames(
        'card',
        {
            'card-button': props.button,
            'card-large': props.large,
            [`shadow-${props.shadow}`]: props.shadow
        }
    );
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

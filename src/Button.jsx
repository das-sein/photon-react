import './style/components/_button.scss';

import React from 'react';
import Typography from './Typography';

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
    // Figure out what size the caption should be
    let typo_size = 'lg'; // Medium caption as default
    if (props.micro) {
        typo_size = 'sm';
    }
    return (
        <button type={'button'} className={classes} {...props}>
            {!props.ghost &&
             <Typography.Caption size={typo_size} container={'div'}>
                 {props.text}
             </Typography.Caption>
            }
            {props.ghost && props.children}
        </button>
    );
}

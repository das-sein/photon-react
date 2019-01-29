import './style/core/_base.scss';
import './style/components/_button.scss';

import React from 'react';
import Typography from './Typography';

const classNames = require('classnames');


function createButton(type) {
    return (props) => {
        let button_type = type ? type : 'default';
        let container = props.container ? props.container : 'div';
        let typo_sizes = {'default': 'md', 'micro': 'sm', 'puffy': 'lg'};
        let status = props.status ? props.status : 'generic';
        let classes = classNames(
            'button',
            `button-status--${status}`,
            {
                [`button-size--${props.size}`]: props.size,
                'button-type--ghost': button_type === 'ghost'
            }
        );
        if (type === 'ghost') {
            return (
                <button type={'button'} className={classes} {...props}>
                    {props.children}
                </button>
            );
        } else {
            return (
                <button type={'button'} className={classes} {...props}>
                    <Typography.Body size={typo_sizes[props.size]} container={container}>
                        {props.children}
                    </Typography.Body>
                </button>
            );
        }
    }
}

const Default = createButton('default');
Default.displayName = 'Button.Default';

const Ghost = createButton('ghost');
Ghost.displayName = 'Button.Ghost';

const Button = {
    Default,
    Ghost
};

export default Button;

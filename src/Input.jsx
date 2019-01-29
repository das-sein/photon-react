import './style/core/_base.scss';
import './style/components/_input.scss';

import React from 'react';
import Typography from './Typography';

const classNames = require('classnames');


function Text(props) {
    let status = props.status ? props.status : 'default';
    let classes = classNames(
        'input',
        `input-status--${status}`,
        {
            'input--with-icon': props.icon,
        }
    );
    let type = props.password ? 'password' : 'text';
    let icon_classes = classNames(
        'icon',
        {
            'icon-placement--inner': props.inner
        }
    );
    return (
        <div class={'input-container'}>
            {props.label &&
             <label for={props.name}>
                 <Typography.Caption size={'lg'} container={'span'}>
                     {props.label}
                 </Typography.Caption>
             </label>
            }
            <div className={icon_classes}>
                {props.icon}
                <input type={type} className={classes} {...props} />
            </div>
        </div>
    );
}

const Input = {
    Text
};

export default Input;

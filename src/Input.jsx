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
            'input--with-icon': props.icon
        }
    );
    let type = props.password ? 'password' : 'text';
    let input = (<input type={type} className={classes} {...props} />);
    return (
        <div class={'input-container'}>
            {props.label &&
             <label for={props.name}>
                 <Typography.Caption size={'lg'} container={'span'}>
                     {props.label}
                 </Typography.Caption>
             </label>
            }
            {input}
            <div className={'icon'}>
                {props.icon}
            </div>
        </div>
    );
}

const Input = {
    Text
};

export default Input;

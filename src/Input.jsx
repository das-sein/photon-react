import './style/core/_base.scss';
import './style/components/_input.scss';

import React from 'react';
import Typography from './Typography';

const classNames = require('classnames');


function Checkbox(props) {
    /* TODO: There is probably a nicer way to do this... */
    let nested_class = props.nested ? 'nested--1' : '';
    if (props.nestednested) {
        nested_class = 'nested--2';
    }
    let classes = classNames('input-container--checkbox', nested_class);
    return (
        <div className={classes}>
            <input id={props.name} name={props.name} type={'checkbox'} {...props} />
            <label for={props.name}>
                <Typography.Body>{props.label}</Typography.Body>
            </label>
            {props.sublabel &&
             <label className={'sublabel'} for={props.name}>
                 <Typography.Body size={'sm'}>{props.sublabel}</Typography.Body>
             </label>
            }
            <div class="nested">
                {props.children}
            </div>
        </div>
    )
}
Checkbox.displayName = 'Input.Checkbox';

function Radio(props) {
    return (
        <div className={'input-container--radio'}>
            <input id={props.name} name={props.name} type={'radio'} {...props} />
            <label for={props.name}>
                <Typography.Body>{props.label}</Typography.Body>
            </label>
        </div>
    );
}
Radio.displayName = 'Input.Radio';

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
Text.displayName = 'Input.Text';

const Input = {
    Checkbox,
    Radio,
    Text
};

export default Input;

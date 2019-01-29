import './style/core/_base.scss';
import './style/components/_card.scss';

import React from 'react';
import Typography from './Typography';

const classNames = require('classnames');


function Actions(props) {
    return (
        <div className={'card-actions'}>
            {props.children}
        </div>
    );
}
Actions.displayName = 'Card.Actions';

function Body(props) {
    let classes = classNames(
        'card',
        {
            'card-button': props.button,
            'card-large': props.large,
            'card-width--auto': props.auto,
            [`shadow-${props.shadow}`]: props.shadow
        }
    );
    return (
        <div className={classes} {...props}>
            {props.children}
        </div>
    );
}
Body.displayName = 'Card.Body';

function Content(props) {
    return (
        <div className={'card-body'}>
            {props.subtitle && (
                 <Typography.Caption size={'sm'}>
                     {props.subtitle}
                 </Typography.Caption>
            )}
            {props.title && (
                 <Typography.Title size={'md'}>
                     {props.title}
                 </Typography.Title>
            )}
            <Typography.Body size={'md'}>
                {props.children}
            </Typography.Body>
        </div>
    );
}
Content.displayName = 'Card.Content';

function Header(props) {
    return (
        <div className={classNames('card-header')}>
            {props.children}
        </div>
    )
}
Header.displayName = 'Card.Header';

const Card = {
    Body,
    Actions,
    Content,
    Header
};

export default Card;

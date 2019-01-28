import React from 'react';
import Typography from '../Typography';

const classNames = require('classnames');

export default function CardBody(props) {
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

import './style/core/_typography.scss';

import React from 'react';

const classNames = require('classnames');


function TypographyBase(props) {
    console.log(props);
    let sizes = {'sm': 10, 'md': 20, 'lg': 30};
    let size = sizes[props.size];
    let classes = classNames(
        'typography',
        `typography-${props.type}`,
        `typography-${props.type}-${size}`,
        {'typography-bold': props.bold}
    );
    return (
        <props.container className={classes}>
            {props.children}
        </props.container>
    );
}

function createTypography(type) {
    return (props) => (
        <TypographyBase type={type} {...props}>
            {props.children}
        </TypographyBase>
    )
}

const Body = createTypography('body');
const Caption = createTypography('caption');
const Display = createTypography('display');
const Title = createTypography('title');

const Typography = {
    Body,
    Caption,
    Display,
    Title
};

export default Typography;

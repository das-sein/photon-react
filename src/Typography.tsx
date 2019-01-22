import '../style/core/_typography.scss';

import React from 'react';
import * as classNames from 'classnames';


export default function Typography(props) {
    let classes = classNames(
        `typography-${props.type}`,
        `typography-${props.type}-${size}`
    );
    return (
        <span class={classes}>
            {props.children}
        </span>
    );
}

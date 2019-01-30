import './style/components/_tabs.scss';

import React from 'react';
import Typography from './Typography';

const classNames = require('classnames');


function Container(props) {
    return (
        <div className={'tab-container'}>
            {props.children.length > 1 &&
             props.children.map(c => React.cloneElement(c, {...props}))
             ||
             props.children
            }
        </div>
    );
}
Container.displayName = 'Tabs.Container';


function Tab(props) {
    let size = props.size ? props.size : 'md';
    let classes = classNames(
        'tab',
        `tab-size--${size}`,
    );
    return (
        <button className={classes} {...props}>
            <Typography.Body size={size} tabindex={-1}>
                {props.title}
            </Typography.Body>
        </button>
    );
}
Tab.displayName = 'Tabs.Tab';

const Tabs = {
    Container,
    Tab
};

export default Tabs;

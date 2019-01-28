import './style/components/_grid.scss';

import React from 'react';

const classNames = require('classnames');


function Row(props) {
    let classes = classNames(
        'grid-row',
        {
            [`grid-col-gap--${props.gap}`]: props.gap,
            [`grid-row-margin--${props.margin}`]: props.margin
        }
    );
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}
Row.displayName = 'Grid.Row';


const Grid = {
    Row
};

export default Grid;

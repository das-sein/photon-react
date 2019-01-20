import "./style/core/_base.scss";
import "./style/components/_grid.scss";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";


function Row({align, children, gap, margin, ...props}) {
  let classes = classNames(
    "grid__row",
    {
      [`grid__row--align-${align}`]: align,
      [`grid__row--gap-${gap}`]: gap,
      [`grid__row--margin-${margin}`]: margin,
    },
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
Row.displayName = "Grid.Row";
Row.defaultProps = {
  gap: 8,
};
Row.propTypes = {
  align: PropTypes.oneOf(["center", "bottom"]),
  gap: PropTypes.oneOf([4, 8, 16, 32]),
  margin: PropTypes.oneOf([4, 8, 16, 32]),
};

function Column({auto, children, gap, margin, ...props}) {
  let classes = classNames(
    "grid__col",
    {
      [`grid__col--gap-${gap}`]: gap,
      [`grid__col--margin-${margin}`]: margin,
      "grid__col--width-auto": auto,
    }
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
Column.displayName = "Grid.Column";
Column.propTypes = {
  auto: PropTypes.bool,
  gap: PropTypes.oneOf([4, 8, 16, 32]),
  margin: PropTypes.oneOf([4, 8, 16, 32]),
};
Column.defaultProps = {
  auto: false
};

const Grid = {
  Column,
  Row
};

export default Grid;

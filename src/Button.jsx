import "./style/core/_base.scss";
import "./style/components/_button.scss";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";


export default function Button({children, size, status, type, ...props}) {
  let classes = classNames(
    "button",
    `button--size-${size}`,
    `button--status-${status}`,
    `button--type-${type}`,
  );
  let typography_sizes = {"default": "md", "micro": "sm", "puffy": "lg"};
  if (type === "ghost") {
    return (
      <button type={"button"} className={classes} {...props}>
        {children}
      </button>
    );
  } else {
    return (
      <button type={"button"} className={classes} {...props}>
        <Typography
          type={"body"}
          size={typography_sizes[size]}
          container={"div"}
        >
          {children}
        </Typography>
      </button>
    );
  }
}

Button.defaultProps = {
  size: "default",
  status: "generic",
  type: "default",
};

Button.propTypes = {
  size: PropTypes.oneOf(["default", "micro", "puffy"]),
  status: PropTypes.oneOf(["generic", "primary", "error", "success", "warning"]),
  type: PropTypes.oneOf(["default", "ghost"]),
};

import "./style/core/_base.scss";
import "./style/components/_input.scss";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";


function Checkbox({children, label, name, sublabel, ...props}) {
  return (
    <div className={"input__container--checkbox"}>
      <input
        className={"input--type-checkbox"}
        id={name}
        name={name}
        type={"checkbox"}
        {...props}
      />
      <label htmlFor={name}>
        <Typography type={"body"}>{label}</Typography>
      </label>
      {sublabel &&
       <label className={"input__sublabel"} htmlFor={name}>
         <Typography type={"body"} size={"sm"}>{sublabel}</Typography>
       </label>
      }
      <div className={"input--nested"}>
        {children}
      </div>
    </div>
  )
}

Checkbox.displayName = "Input.Checkbox";

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  sublabel: PropTypes.string
};

function Radio({label, name, ...props}) {
  return (
    <div className={"input__container--radio"}>
      <input
        className={"input--type-radio"}
        id={name}
        name={name}
        type={"radio"}
        {...props}
      />
      <label htmlFor={name}>
        <Typography type={"body"}>{label}</Typography>
      </label>
    </div>
  );
}

Radio.displayName = "Input.Radio";

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

function Text({icon, label, name, status, type, ...props}) {
  let inputClasses = classNames(
    "input--type-text",
    `input--status-${status}`,
  );
  return (
    <div className={"input__container--text"}>
      {label &&
       <label htmlFor={name}>
         <Typography type={"caption"} size={"lg"} container={"span"}>
           {label}
         </Typography>
       </label>
      }
      <input type={type} className={inputClasses} {...props} />
    </div>
  );
}

Text.displayName = "Input.Text";

Text.defaultProps = {
  status: "default",
  type: "text",
};

Text.propTypes = {
  icon: PropTypes.element,
  inner: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["default", "warning", "error"]),
  type: PropTypes.oneOf(["search", "text", "password"]),
};

const Input = {
  Checkbox,
  Radio,
  Text
};

export default Input;

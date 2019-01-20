import "./style/components/_tabs.scss";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";


function Container({children, size, ...props}) {
  let classes = classNames(
    "tab__container",
    `tab--size-${size}`,
  );
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
Container.displayName = "Tabs.Container";
Container.defaultProps = {
  size: "default",
};
Container.propTypes = {
  size: PropTypes.oneOf(["default", "lg"]),
};

function Tab({title, ...props}) {
  let classes = classNames("tab");
  return (
    <button className={classes} {...props}>
      <Typography type={"body"}>
        {title}
      </Typography>
    </button>
  );
}
Tab.displayName = "Tabs.Tab";
Tab.propTypes = {
  title: PropTypes.string,
};

const Tabs = {
  Container,
  Tab
};

export default Tabs;

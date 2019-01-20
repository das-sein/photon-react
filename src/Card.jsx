import "./style/core/_base.scss";
import "./style/components/_card.scss";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Typography from "./Typography";


function Actions(props) {
  let classes = classNames("card__actions");
  return (
    <div className={classes} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
Actions.displayName = "Card.Actions";

function Body({onClick, shadow, size, type, width, ...props}) {
  let classes = classNames(
    "card",
    `card--size-${size}`,
    `card--type-${type}`,
    `card--width-${width}`,
    `shadow-${shadow}`,
  );
  return (
    <div className={classes} onClick={onClick}>
      {props.children}
    </div>
  );
}
Body.displayName = "Card.Body";
Body.defaultProps = {
  shadow: 20,
  size: "default",
  type: "default",
  width: "default",
};
Body.propTypes = {
  size: PropTypes.oneOf(["default", "lg"]),
  type: PropTypes.oneOf(["default", "button"]),
  onClick: PropTypes.func,
  width: PropTypes.string,
};

function Content(props) {
  let classes = classNames("card__body");
  return (
    <div className={classes}>
      {props.subtitle && (
         <Typography type={"caption"} size={"md"} container={"div"}>
           {props.subtitle}
         </Typography>
      )}
      {props.title && (
         <Typography type={"title"} size={"md"} container={"div"}>
           {props.title}
         </Typography>
      )}
      <Typography type={"body"} size={"md"} container={"div"}>
        {props.children}
      </Typography>
    </div>
  );
}
Content.displayName = "Card.Content";
Content.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
};

function Header(props) {
  let classes = classNames("card__header");
  return (
    <div className={classes} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
Header.displayName = "Card.Header";

const Card = {
  Body,
  Actions,
  Content,
  Header
};

export default Card;

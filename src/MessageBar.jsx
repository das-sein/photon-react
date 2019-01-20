import "./style/core/_base.scss";
import "./style/components/_messagebar.scss";
/* Icons */
import CheckIcon from "photon-icons/icons/desktop/check-16.svg";
import CloseIcon from "photon-icons/icons/desktop/close-16.svg";
import IdentityIcon from "photon-icons/icons/desktop/identity-icon.svg";
import IdentityIconHover from "photon-icons/icons/desktop/identity-icon-hover.svg";
import WarningIcon from "photon-icons/icons/desktop/warning-16.svg";

import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Typography from "./Typography";


export default function MessageBar({action, children, dismiss, onClick,
                                    onDismiss, status, width, ...props}) {
  let classes = classNames(
    "messagebar",
    `messagebar--status-${status}`,
    `messagebar--width-${width}`,
  );

  // Generic default icon
  let Icon = IdentityIcon;
  if (status === "error") {
    Icon = IdentityIconHover;
  } else if (status === "success") {
    Icon = CheckIcon;
  } else if (status === "warning") {
    Icon = WarningIcon;
  }

  return (
    <div className={classes}>
      <Icon className={"messagebar__icon"} />
      <div className={"messagebar__message"}>
        <Typography type={"body"} size={"sm"}>
          {children}
        </Typography>
      </div>
      {action &&
       <Button
         size={"micro"}
         status={status}
         onClick={onClick}
         >
         {action}
       </Button>
      }
      <div className={"messagebar__spacer"} />
      {dismiss &&
       <CloseIcon
         className={"messagebar__icon messagebar__close"}
         size={"micro"}
         onClick={onDismiss}
       />
      }
    </div>
  );
}

MessageBar.propTypes = {
  action: PropTypes.string,
  dismiss: PropTypes.bool,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func,
  status: PropTypes.oneOf(["generic", "error", "success", "warning"]),
  width: PropTypes.oneOf(["default", "auto"]),
};

MessageBar.defaultProps = {
  status: "generic",
  width: "default",
};

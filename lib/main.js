'use strict';



function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

___$insertStyle("/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* Photon Colors SCSS Variables v3.3.1 */\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:200,300,400,500,700\");\n.typography {\n  font-family: \"Fira Sans\";\n}\n.typography-bold {\n  font-weight: 700 !important;\n}\n\n.typography-body {\n  font-weight: 400;\n  /* Not included in spec, but makes the text more readable. */\n  line-height: 1.25rem;\n}\n.typography-body-10 {\n  font-size: 13px;\n}\n.typography-body-20, body {\n  font-size: 15px;\n}\n.typography-body-30 {\n  font-size: 17px;\n}\n\n.typography-caption {\n  font-weight: 400;\n}\n.typography-caption-10 {\n  font-size: 11px;\n}\n.typography-caption-20 {\n  font-size: 13px;\n}\n.typography-caption-30 {\n  font-size: 15px;\n}\n\n.typography-display {\n  font-weight: 200;\n}\n.typography-display-20 {\n  font-size: 36px;\n}\n\n.typography-title-10 {\n  font-size: 13px;\n  font-weight: 500;\n}\n.typography-title-20 {\n  font-size: 17px;\n  font-weight: 500;\n}\n.typography-title-30 {\n  font-size: 22px;\n  font-weight: 300;\n}\n.typography-title-40 {\n  font-size: 28px;\n  font-weight: 300;\n}\n\nbody {\n  font-family: \"Fira Sans\";\n}\n\na {\n  color: #0060df;\n  border-radius: 4px;\n  padding: 0 8px;\n  text-decoration: none;\n}\na:hover {\n  color: #0060df;\n  text-decoration: underline;\n}\na:active {\n  color: #003eaa;\n}\na:focus {\n  border: 0;\n  outline: 0;\n  box-shadow: 0 0 0 2px #0a84ff, 0 0 0 6px rgba(10, 132, 255, 0.3);\n}");

___$insertStyle("/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* Photon Colors SCSS Variables v3.3.1 */\n.button {\n  border: 0;\n  border-radius: 2px;\n  height: 32px;\n  min-width: 132px;\n  padding: 0 8px;\n  width: auto;\n  /* Disable Firefox button focus outlining. */\n}\n.button:disabled {\n  opacity: 0.4;\n}\n.button:focus:enabled {\n  border: 0;\n  box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n  outline: 0;\n}\n.button-size--micro {\n  height: 24px;\n}\n.button-size--puffy {\n  border-radius: 4px;\n  height: 48px;\n  padding: 0 16px;\n}\n.button-status--generic {\n  background: rgba(12, 12, 13, 0.1);\n  color: #0c0c0d;\n}\n.button-status--generic:hover:enabled {\n  background: rgba(12, 12, 13, 0.2);\n}\n.button-status--generic:active:enabled {\n  background: rgba(12, 12, 13, 0.3);\n}\n.button-status--error {\n  background: #a4000f;\n  color: white;\n}\n.button-status--error:hover:enabled {\n  background: #5a0002;\n}\n.button-status--error:active:enabled {\n  background: #3e0200;\n}\n.button-status--primary {\n  background: #0060df;\n  color: white;\n}\n.button-status--primary:hover:enabled {\n  background: #003eaa;\n}\n.button-status--primary:active:enabled {\n  background: #002275;\n}\n.button-status--success {\n  background: #12bc00;\n  color: #0c0c0d;\n  transition: color 100ms;\n}\n.button-status--success:hover:enabled {\n  background: #058b00;\n  color: white;\n}\n.button-status--success:active:enabled {\n  background: #006504;\n  color: white;\n}\n.button-status--warning {\n  background: #d7b600;\n  color: #0c0c0d;\n  transition: color 100ms;\n}\n.button-status--warning:hover:enabled {\n  background: #a47f00;\n  color: white;\n}\n.button-status--warning:active:enabled {\n  background: #715100;\n  color: white;\n}\n.button-type--ghost {\n  background: transparent;\n  color: rgba(12, 12, 13, 0.8);\n  min-width: 0;\n  width: 32px;\n}\n.button-type--ghost:hover:enabled {\n  background: rgba(12, 12, 13, 0.1);\n}\n.button-type--ghost:active:enabled {\n  background: rgba(12, 12, 13, 0.2);\n}\n.button > .typography {\n  color: inherit;\n}\n.button::-moz-focus-inner {\n  border: 0;\n  outline: 0;\n}");

___$insertStyle("@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:200,300,400,500,700\");\n.typography {\n  font-family: \"Fira Sans\";\n}\n.typography-bold {\n  font-weight: 700 !important;\n}\n\n.typography-body {\n  font-weight: 400;\n  /* Not included in spec, but makes the text more readable. */\n  line-height: 1.25rem;\n}\n.typography-body-10 {\n  font-size: 13px;\n}\n.typography-body-20 {\n  font-size: 15px;\n}\n.typography-body-30 {\n  font-size: 17px;\n}\n\n.typography-caption {\n  font-weight: 400;\n}\n.typography-caption-10 {\n  font-size: 11px;\n}\n.typography-caption-20 {\n  font-size: 13px;\n}\n.typography-caption-30 {\n  font-size: 15px;\n}\n\n.typography-display {\n  font-weight: 200;\n}\n.typography-display-20 {\n  font-size: 36px;\n}\n\n.typography-title-10 {\n  font-size: 13px;\n  font-weight: 500;\n}\n.typography-title-20 {\n  font-size: 17px;\n  font-weight: 500;\n}\n.typography-title-30 {\n  font-size: 22px;\n  font-weight: 300;\n}\n.typography-title-40 {\n  font-size: 28px;\n  font-weight: 300;\n}");

const classNames = require('classnames');

function TypographyBase(props) {
  let sizes = {
    'sm': 10,
    'md': 20,
    'lg': 30
  };
  let size = sizes[props.size];
  let classes = classNames('typography', `typography-${props.type}`, `typography-${props.type}-${size}`, {
    'typography-bold': props.bold
  });
  let container = {
    'container': props.container
  };

  if (!props.container) {
    container['container'] = 'div';
  }

  return React.createElement(container.container, {
    className: classes
  }, props.children);
}

function createTypography(type) {
  return props => React.createElement(TypographyBase, _extends({
    type: type
  }, props), props.children);
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

const classNames$1 = require('classnames');

function createButton(type) {
  return props => {
    let button_type = type ? type : 'default';
    let container = props.container ? props.container : 'div';
    let typo_sizes = {
      'default': 'md',
      'micro': 'sm',
      'puffy': 'lg'
    };
    let status = props.status ? props.status : 'generic';
    let classes = classNames$1('button', `button-status--${status}`, {
      [`button-size--${props.size}`]: props.size,
      'button-type--ghost': button_type === 'ghost'
    });

    if (type === 'ghost') {
      return React.createElement("button", _extends({
        type: 'button',
        className: classes
      }, props), props.children);
    } else {
      return React.createElement("button", _extends({
        type: 'button',
        className: classes
      }, props), React.createElement(Typography.Body, {
        size: typo_sizes[props.size],
        container: container
      }, props.children));
    }
  };
}

const Default = createButton('default');
Default.displayName = 'Button.Default';
const Ghost = createButton('ghost');
Ghost.displayName = 'Button.Ghost';
const Button = {
  Default,
  Ghost
};

___$insertStyle("/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* Photon Colors SCSS Variables v3.3.1 */\n.shadow-10 {\n  box-shadow: 0px 1px 4px rgba(12, 12, 13, 0.1);\n}\n.shadow-20 {\n  box-shadow: 0px 2px 8px rgba(12, 12, 13, 0.1);\n}\n.shadow-30 {\n  box-shadow: 0px 4px 16px rgba(12, 12, 13, 0.1);\n}\n\n.card {\n  border-radius: 4px;\n  box-sizing: inherit;\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.card-width--auto {\n  width: auto;\n}\n.card-large {\n  padding: 0 20px;\n}\n.card-button {\n  cursor: pointer;\n}\n.card-button:hover {\n  box-shadow: 0 0 0 5px #d7d7db;\n  transition: box-shadow 0.1s;\n}\n.card-button:hover .typography-title {\n  color: #0060df;\n}\n\n.card-header {\n  height: 155px;\n  padding: 0;\n  overflow: hidden;\n  width: 100%;\n}\n.card-header img {\n  width: 100%;\n}\n\n.card-body {\n  padding: 16px 16px 16px;\n}\n.card-body .typography-title {\n  margin: 0 0 4px;\n}\n.card-body > .typography-caption {\n  color: rgba(0, 0, 0, 0.75);\n  margin: 0 0 4px;\n  text-transform: uppercase;\n}\n\n.card-actions {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 16px;\n}\n.card-actions > button {\n  width: 100%;\n}\n.card-actions > *:not(:first-child) {\n  /* Action button spacing according to grid. */\n  margin-left: 8px;\n}");

const classNames$2 = require('classnames');

function Actions(props) {
  return React.createElement("div", {
    className: 'card-actions'
  }, props.children);
}

Actions.displayName = 'Card.Actions';

function Body$1(props) {
  let classes = classNames$2('card', {
    'card-button': props.button,
    'card-large': props.large,
    'card-width--auto': props.auto,
    [`shadow-${props.shadow}`]: props.shadow
  });
  return React.createElement("div", _extends({
    className: classes
  }, props), props.children);
}

Body$1.displayName = 'Card.Body';

function Content(props) {
  return React.createElement("div", {
    className: 'card-body'
  }, props.subtitle && React.createElement(Typography.Caption, {
    size: 'sm'
  }, props.subtitle), props.title && React.createElement(Typography.Title, {
    size: 'md'
  }, props.title), React.createElement(Typography.Body, {
    size: 'md'
  }, props.children));
}

Content.displayName = 'Card.Content';

function Header(props) {
  return React.createElement("div", {
    className: classNames$2('card-header')
  }, props.children);
}

Header.displayName = 'Card.Header';
const Card = {
  Body: Body$1,
  Actions,
  Content,
  Header
};

___$insertStyle(".grid-row {\n  align-items: baseline;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(165px, auto));\n  grid-gap: 8px;\n}\n\n.grid-col {\n  display: inline-grid;\n  grid-auto-flow: row;\n}\n\n.grid-col-gap--4 {\n  grid-gap: 4px;\n}\n\n.grid-row-margin--4 {\n  margin-bottom: 4px;\n}\n\n.grid-col-margin--4 {\n  margin-right: 4px;\n}\n\n.grid-col-gap--8 {\n  grid-gap: 8px;\n}\n\n.grid-row-margin--8 {\n  margin-bottom: 8px;\n}\n\n.grid-col-margin--8 {\n  margin-right: 8px;\n}\n\n.grid-col-gap--16 {\n  grid-gap: 16px;\n}\n\n.grid-row-margin--16 {\n  margin-bottom: 16px;\n}\n\n.grid-col-margin--16 {\n  margin-right: 16px;\n}\n\n.grid-col-gap--32 {\n  grid-gap: 32px;\n}\n\n.grid-row-margin--32 {\n  margin-bottom: 32px;\n}\n\n.grid-col-margin--32 {\n  margin-right: 32px;\n}");

const classNames$3 = require('classnames');

function Row(props) {
  let classes = classNames$3('grid-row', {
    [`grid-col-gap--${props.gap}`]: props.gap,
    [`grid-row-margin--${props.margin}`]: props.margin
  });
  return React.createElement("div", {
    className: classes
  }, props.children);
}

Row.displayName = 'Grid.Row';

function Column(props) {
  let classes = classNames$3('grid-col', {
    [`grid-col-gap--${props.gap}`]: props.gap,
    [`grid-col-margin--${props.margin}`]: props.margin
  });
  return React.createElement("div", {
    className: classes
  }, props.children);
}

Column.displayName = 'Grid.Column';
const Grid = {
  Column,
  Row
};

___$insertStyle("/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* Photon Colors SCSS Variables v3.3.1 */\n@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:200,300,400,500,700\");\n.typography {\n  font-family: \"Fira Sans\";\n}\n.typography-bold {\n  font-weight: 700 !important;\n}\n\n.typography-body {\n  font-weight: 400;\n  /* Not included in spec, but makes the text more readable. */\n  line-height: 1.25rem;\n}\n.typography-body-10 {\n  font-size: 13px;\n}\n.typography-body-20, .input {\n  font-size: 15px;\n}\n.typography-body-30 {\n  font-size: 17px;\n}\n\n.typography-caption {\n  font-weight: 400;\n}\n.typography-caption-10 {\n  font-size: 11px;\n}\n.typography-caption-20 {\n  font-size: 13px;\n}\n.typography-caption-30 {\n  font-size: 15px;\n}\n\n.typography-display {\n  font-weight: 200;\n}\n.typography-display-20 {\n  font-size: 36px;\n}\n\n.typography-title-10 {\n  font-size: 13px;\n  font-weight: 500;\n}\n.typography-title-20 {\n  font-size: 17px;\n  font-weight: 500;\n}\n.typography-title-30 {\n  font-size: 22px;\n  font-weight: 300;\n}\n.typography-title-40 {\n  font-size: 28px;\n  font-weight: 300;\n}\n\n.input-container {\n  display: inline-block;\n  width: auto;\n  /* Handle radio button case */\n}\n.input-container label {\n  margin-bottom: 8px;\n  display: block;\n}\n.input-container .icon-placement--inner > svg {\n  left: 24px !important;\n}\n.input-container .icon > svg {\n  left: 18px;\n  padding-top: 8px;\n  position: absolute;\n}\n.input-container .icon > svg > path {\n  fill: rgba(12, 12, 13, 0.6);\n}\n.input-container--radio {\n  padding: 3px 0;\n}\n.input-container--radio > label {\n  display: inline-block;\n}\n.input-container--radio > input[type=radio] {\n  margin-left: 4px;\n  vertical-align: text-bottom;\n  height: 16px;\n  width: 16px;\n}\n\n.input {\n  border: 0;\n  /* Reset default border in browsers. */\n  box-shadow: 0 0 0 1px rgba(12, 12, 13, 0.2);\n  border-radius: 2px;\n  height: 32px;\n  padding: 0 8px;\n  width: auto;\n}\n.input:hover {\n  box-shadow: 0 0 0 1px rgba(12, 12, 13, 0.3);\n}\n.input--with-icon {\n  padding: 0 8px 0 36px;\n}\n.input-status--default:focus:enabled {\n  box-shadow: 0 0 0 1px #0a84ff inset, 0 0 0 1px #0a84ff, 0 0 0 4px rgba(10, 132, 255, 0.3);\n}\n.input-status--warning:focus:enabled {\n  box-shadow: 0 0 0 1px #d7b600 inset, 0 0 0 1px #d7b600, 0 0 0 4px rgba(215, 182, 0, 0.3);\n}\n.input-status--error:focus:enabled {\n  box-shadow: 0 0 0 1px #d70022 inset, 0 0 0 1px #d70022, 0 0 0 4px rgba(251, 0, 34, 0.3);\n}");

const classNames$4 = require('classnames');

function Radio(props) {
  return React.createElement("div", {
    className: 'input-container--radio'
  }, React.createElement("input", _extends({
    name: props.name,
    type: 'radio'
  }, props)), React.createElement("label", {
    for: props.name
  }, React.createElement(Typography.Body, null, props.label)));
}

function Text(props) {
  let status = props.status ? props.status : 'default';
  let classes = classNames$4('input', `input-status--${status}`, {
    'input--with-icon': props.icon
  });
  let type = props.password ? 'password' : 'text';
  let icon_classes = classNames$4('icon', {
    'icon-placement--inner': props.inner
  });
  return React.createElement("div", {
    class: 'input-container'
  }, props.label && React.createElement("label", {
    for: props.name
  }, React.createElement(Typography.Caption, {
    size: 'lg',
    container: 'span'
  }, props.label)), React.createElement("div", {
    className: icon_classes
  }, props.icon, React.createElement("input", _extends({
    type: type,
    className: classes
  }, props))));
}

const Input = {
  Radio,
  Text
};

___$insertStyle("/* This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n/* Photon Colors SCSS Variables v3.3.1 */\n.messagebar {\n  border-radius: 4px;\n  display: flex;\n  min-height: 32px;\n  padding: 0 4px;\n  /* Icon styling */\n}\n.messagebar > button {\n  align-self: center;\n  margin-left: 8px;\n}\n.messagebar-status--generic {\n  background: #ededf0;\n}\n.messagebar-status--error {\n  color: white;\n  background: #ff0039;\n}\n.messagebar-status--error > svg > path {\n  fill: white;\n}\n.messagebar-status--success {\n  background: #30e60b;\n}\n.messagebar-status--warning {\n  background: #ffe900;\n}\n.messagebar-width--auto {\n  display: inline-flex;\n  width: auto;\n}\n.messagebar .close {\n  cursor: pointer;\n  border-radius: 4px;\n  margin-left: 32px;\n  margin-right: 0;\n  padding-right: 0;\n}\n.messagebar .close:hover {\n  background: rgba(0, 0, 0, 0.25);\n}\n.messagebar .icon {\n  align-self: center;\n  display: inline;\n  margin-right: 4px;\n  padding: 4px;\n}\n.messagebar .icon > * {\n  height: 16px;\n}\n.messagebar .message {\n  align-self: center;\n  display: inline-block;\n  margin-right: 4px;\n}\n.messagebar .spacer {\n  flex-grow: 1;\n}");

var CheckIcon = 'data:image/svg+xml;base64,ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfQoKaW1wb3J0IFJlYWN0IGZyb20gInJlYWN0IjsKZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7CiAgbGV0IHsKICAgIHN0eWxlcyA9IHt9CiAgfSA9IF9yZWYsCiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsic3R5bGVzIl0pOwoKICByZXR1cm4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB7Li4ucHJvcHN9PjxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZD0iTTYgMTRhMSAxIDAgMCAxLS43MDctLjI5M2wtMy0zYTEgMSAwIDAgMSAxLjQxNC0xLjQxNGwyLjE1NyAyLjE1NyA2LjMxNi05LjAyM2ExIDEgMCAwIDEgMS42MzkgMS4xNDZsLTcgMTBhMSAxIDAgMCAxLS43MzIuNDI3QS44NjMuODYzIDAgMCAxIDYgMTR6IiAvPjwvc3ZnPjsKfSk7';

var CloseIcon = 'data:image/svg+xml;base64,ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfQoKaW1wb3J0IFJlYWN0IGZyb20gInJlYWN0IjsKZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7CiAgbGV0IHsKICAgIHN0eWxlcyA9IHt9CiAgfSA9IF9yZWYsCiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsic3R5bGVzIl0pOwoKICByZXR1cm4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB7Li4ucHJvcHN9PjxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZD0iTTkuMDYxIDhsMy40Ny0zLjQ3YS43NS43NSAwIDAgMC0xLjA2MS0xLjA2TDggNi45MzkgNC41MyAzLjQ3YS43NS43NSAwIDEgMC0xLjA2IDEuMDZMNi45MzkgOCAzLjQ3IDExLjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2MWwzLjQ3IDMuNDdhLjc1Ljc1IDAgMCAwIDEuMDYtMS4wNjF6IiAvPjwvc3ZnPjsKfSk7';

var IdentityIcon = 'data:image/svg+xml;base64,ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfQoKaW1wb3J0IFJlYWN0IGZyb20gInJlYWN0IjsKZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7CiAgbGV0IHsKICAgIHN0eWxlcyA9IHt9CiAgfSA9IF9yZWYsCiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsic3R5bGVzIl0pOwoKICByZXR1cm4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB7Li4ucHJvcHN9PjxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZmlsbFJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE1YTcgNyAwIDEgMSA3LTcgNyA3IDAgMCAxLTcgN3pNOCAyYTYgNiAwIDEgMCA2IDYgNiA2IDAgMCAwLTYtNnptMCAxMGExIDEgMCAwIDEtMS0xVjhhMSAxIDAgMCAxIDIgMHYzYTEgMSAwIDAgMS0xIDF6bTAtNmExIDEgMCAxIDEgMS0xIDEgMSAwIDAgMS0xIDF6IiAvPjwvc3ZnPjsKfSk7';

var IdentityIconHover = 'data:image/svg+xml;base64,ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfQoKaW1wb3J0IFJlYWN0IGZyb20gInJlYWN0IjsKZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7CiAgbGV0IHsKICAgIHN0eWxlcyA9IHt9CiAgfSA9IF9yZWYsCiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsic3R5bGVzIl0pOwoKICByZXR1cm4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB7Li4ucHJvcHN9PjxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZmlsbFJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhNyA3IDAgMSAxLTcgNyA3IDcgMCAwIDEgNy03em0wIDNhMSAxIDAgMSAxLTEgMSAxIDEgMCAwIDEgMS0xem0wIDNhMSAxIDAgMCAxIDEgMXYzYTEgMSAwIDAgMS0yIDBWOGExIDEgMCAwIDEgMS0xeiIgLz48L3N2Zz47Cn0pOw==';

var WarningIcon = 'data:image/svg+xml;base64,ZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfQoKaW1wb3J0IFJlYWN0IGZyb20gInJlYWN0IjsKZXhwb3J0IGRlZmF1bHQgKChfcmVmKSA9PiB7CiAgbGV0IHsKICAgIHN0eWxlcyA9IHt9CiAgfSA9IF9yZWYsCiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsic3R5bGVzIl0pOwoKICByZXR1cm4gPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiB7Li4ucHJvcHN9PjxwYXRoIGZpbGw9ImNvbnRleHQtZmlsbCIgZD0iTTE0Ljc0MiAxMi4xMDZMOS43ODkgMi4yYTIgMiAwIDAgMC0zLjU3OCAwbC00Ljk1MyA5LjkxQTIgMiAwIDAgMCAzLjA0NyAxNWg5LjkwNWEyIDIgMCAwIDAgMS43OS0yLjg5NHpNNyA1YTEgMSAwIDAgMSAyIDB2NGExIDEgMCAwIDEtMiAwem0xIDguMjVBMS4yNSAxLjI1IDAgMSAxIDkuMjUgMTIgMS4yNSAxLjI1IDAgMCAxIDggMTMuMjV6IiAvPjwvc3ZnPjsKfSk7';

const classNames$5 = require('classnames');

function MessageBar(props) {
  let status = props.status ? props.status : 'generic';
  let classes = classNames$5('messagebar', `messagebar-status--${status}`, {
    'messagebar-width--auto': props.auto
  }); // Generic default icon

  let icon = React.createElement(IdentityIcon, {
    className: 'icon'
  });

  switch (props.status) {
    case 'error':
      icon = React.createElement(IdentityIconHover, {
        className: 'icon'
      });
      break;

    case 'success':
      icon = React.createElement(CheckIcon, {
        className: 'icon'
      });
      break;

    case 'warning':
      icon = React.createElement(WarningIcon, {
        className: 'icon'
      });
      break;
  }

  return React.createElement("div", {
    className: classes
  }, icon, React.createElement("div", {
    className: 'message'
  }, React.createElement(Typography.Body, {
    size: 'sm'
  }, props.children)), props.action && React.createElement(Button.Default, {
    size: 'micro',
    status: props.status,
    onClick: props.actionOnClick
  }, props.action), React.createElement("div", {
    class: 'spacer'
  }), props.dismiss && React.createElement(CloseIcon, {
    className: 'icon close',
    size: 'micro',
    onClick: props.onClose
  }));
}

exports.Button = Button;
exports.Card = Card;
exports.Grid = Grid;
exports.Input = Input;
exports.MessageBar = MessageBar;
exports.Typography = Typography;

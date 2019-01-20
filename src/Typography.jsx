import './style/core/_base.scss';
import './style/core/_typography.scss';

import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';


export default function Typography({children, container, bold, size, type}) {
  let sizes = {'sm': 10, 'md': 20, 'lg': 30, 'xl': 40};
  let classes = classNames(
    'typography',
    `typography--type-${type}`,
    `typography--size-${sizes[size]}`,
    {'typography--bold': bold},
  );
  // For some reason, we have to do this for the container to take...
  const someContainer = {container: container};
  return (
    <someContainer.container className={classes}>
      {children}
    </someContainer.container>
  );
}

Typography.defaultProps = {
  container: 'span',
  bold: false,
  size: "md",
  type: "body",
};

Typography.propTypes = {
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['body', 'caption', 'display', 'title'])
};

import React from 'react';
import PropTypes from 'prop-types';
/* jshint ignore:start */
const Link = ({ active, children, onClick }) => {
  if (active) {
    return (<span className="font-weight-bold">{children}</span>);
  }

  return (
    <a
      href='#'
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="text-decoration-none font-weight-light"
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;

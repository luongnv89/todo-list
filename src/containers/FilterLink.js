import React from 'react';
import { NavLink } from 'react-router-dom';
/* jshint ignore:start */
const FilterLink = ({ filterLink, children }) => (
  <NavLink
    exact
    to={filterLink === 'SHOW_ALL' ? '/' : `/${filterLink}`}
    className="btn btn-sm btnTodo"
    style={{borderRadius: '30px'}}
  >
    {children}
  </NavLink>
);

export default FilterLink;

import React from 'react';
import { NavLink } from 'react-router-dom';
/* jshint ignore:start */
const FilterTag = ({ filterTag, children }) => (
  <NavLink
    exact
    to={filterTag === 'SHOW_ALL' ? '/' : `/${filterTag}`}
    className="btn btn-sm btnTodo"
    style={{borderRadius: '30px'}}
  >
    {children}
  </NavLink>
);

export default FilterTag;

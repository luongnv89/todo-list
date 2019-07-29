import React from 'react';
import { NavLink } from 'react-router-dom';
/* jshint ignore:start */
const FilterLink = ({ filter, changeVisibilityFilter, children }) => (
  <div>
    <NavLink
      exact
      to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
      activeStyle={{
        textDecoration: 'none',
        color: 'black',
      }}
    >
      {children}
    </NavLink>
    <button
      className="btn btn-sm btn-outline-dark"
      onClick={() => changeVisibilityFilter(filter)}
    >
      {children}
    </button>
  </div>

);

export default FilterLink;

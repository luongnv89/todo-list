// import { connect} from 'react-redux';
// import { setVisibilityFilter } from '../actions';
// import Link from '../components/Link';

import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink;
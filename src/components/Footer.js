import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
/* jshint ignore:start */
const Footer = ({ total, totalActive, totalCompleted, filter }) => (
  <div style={{marginTop: '20px'}}>
    <FilterLink filterLink={VisibilityFilters.SHOW_ALL}>
      <span className={`${filter === VisibilityFilters.SHOW_ALL ? 'font-weight-bolder': ''}`}>All <span className="badge badge-dark">{total}</span></span>
    </FilterLink>
    <FilterLink filterLink={VisibilityFilters.SHOW_ACTIVE}>
      <span className={`${filter === VisibilityFilters.SHOW_ACTIVE ? 'font-weight-bolder': ''}`}> Active <span className="badge badge-dark">{totalActive}</span></span>
    </FilterLink>
    <FilterLink filterLink={VisibilityFilters.SHOW_COMPLETED}>
      <span className={`${filter === VisibilityFilters.SHOW_COMPLETED ? 'font-weight-bolder': ''}`}>Completed <span className="badge badge-dark">{totalCompleted}</span></span>
    </FilterLink>
  </div>
);

export default Footer;

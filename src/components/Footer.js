import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
/* jshint ignore:start */
const Footer = ({ total, totalActive, totalCompleted, filter }) => (
  <div style={{marginTop: '20px'}}>
    <FilterLink filterLink={VisibilityFilters.SHOW_ALL}>
      <span className={`btn btn-sm btnTodo btn-light ${filter === VisibilityFilters.SHOW_ALL ? 'font-weight-bolder': ''}`}>All {total}</span>{' '}
    </FilterLink>
    <FilterLink filterLink={VisibilityFilters.SHOW_ACTIVE}>
      <span className={`btn btn-sm btnTodo btn-success ${filter === VisibilityFilters.SHOW_ACTIVE ? 'font-weight-bolder': ''}`}> Active {totalActive}</span>{' '}
    </FilterLink>
    <FilterLink filterLink={VisibilityFilters.SHOW_COMPLETED}>
      <span className={`btn btn-sm btnTodo btn-danger ${filter === VisibilityFilters.SHOW_COMPLETED ? 'font-weight-bolder': ''}`}>Completed {totalCompleted}</span>
    </FilterLink>
  </div>
);

export default Footer;

import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
/* jshint ignore:start */
const Footer = ({ total, totalActive, totalCompleted, changeVisibilityFilter }) => (
  <p>
    Show:{' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL} changeVisibilityFilter={changeVisibilityFilter}>
      {' '}
      <span className="badge badge-light">All {total}</span>{' '}
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} changeVisibilityFilter={changeVisibilityFilter}>
      {' '}
      <span className="badge badge-success"> Active {totalActive}</span>{' '}
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} changeVisibilityFilter={changeVisibilityFilter}>
      {' '}
      <span className="badge badge-danger">Completed {totalCompleted}</span>
    </FilterLink>
  </p>
);

export default Footer;

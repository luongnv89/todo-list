import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
/* jshint ignore:start */
const Footer = ({ total, totalActive, totalCompleted }) => (
  <div>
    Show:{' '}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      {' '}
      <span className="badge badge-light">All {total}</span>{' '}
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      {' '}
      <span className="badge badge-success"> Active {totalActive}</span>{' '}
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      {' '}
      <span className="badge badge-danger">Completed {totalCompleted}</span>
    </FilterLink>
  </div>
);

export default Footer;

import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';
/* jshint ignore:start */
const Footer = ({ total, totalActive, totalCompleted, changeVisibilityFilter }) => (
  <div>
    <p>
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
    </p>
    <div>
      <button
        className="btn btn-sm btn-outline-dark btn-light"
        onClick={() => changeVisibilityFilter(VisibilityFilters.SHOW_ALL)}
      >
        {VisibilityFilters.SHOW_ALL}
      </button>
      <button
        className="btn btn-sm btn-outline-dark btn-success"
        onClick={() => changeVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}
      >
        {VisibilityFilters.SHOW_ACTIVE}
      </button>
      <button
        className="btn btn-sm btn-outline-dark btn-danger"
        onClick={() => changeVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}
      >
        {VisibilityFilters.SHOW_COMPLETED}
      </button>
    </div>
  </div>
);

export default Footer;

import React from 'react';
import FilterTag from '../containers/FilterTag';
import { VisibilityFilters } from '../actions';
/* jshint ignore:start */
const TodoFilter = ({ total, totalActive, totalCompleted, filter }) => (
  <div style={{marginTop: '20px'}}>
    <FilterTag filterTag={VisibilityFilters.SHOW_ALL}>
      <span className={`${filter === VisibilityFilters.SHOW_ALL ? 'font-weight-bolder': ''}`}>All <span className="badge badge-dark">{total}</span></span>
    </FilterTag>
    <FilterTag filterTag={VisibilityFilters.SHOW_ACTIVE}>
      <span className={`${filter === VisibilityFilters.SHOW_ACTIVE ? 'font-weight-bolder': ''}`}> Active <span className="badge badge-dark">{totalActive}</span></span>
    </FilterTag>
    <FilterTag filterTag={VisibilityFilters.SHOW_COMPLETED}>
      <span className={`${filter === VisibilityFilters.SHOW_COMPLETED ? 'font-weight-bolder': ''}`}>Completed <span className="badge badge-dark">{totalCompleted} / {total}</span></span>
    </FilterTag>
  </div>
);

export default TodoFilter;

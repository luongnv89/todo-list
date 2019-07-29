import { createReducer } from 'redux-act';
import { setVisibilityFilter, VisibilityFilters } from '../actions';

const initialState = VisibilityFilters.SHOW_ALL;
/* jshint ignore:start */
export default createReducer(
  {
    [setVisibilityFilter]: (filter) => (filter),
  },
  initialState,
);

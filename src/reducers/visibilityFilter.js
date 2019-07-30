import { createReducer } from 'redux-act';
import { setVisibilityFilter, VisibilityFilters } from '../actions';
import produce from 'immer';

const initialState = VisibilityFilters.SHOW_ALL;
/* jshint ignore:start */
export default createReducer(
  {
    [setVisibilityFilter]: produce((draft, filter) => (draft = filter)),
  },
  initialState,
);

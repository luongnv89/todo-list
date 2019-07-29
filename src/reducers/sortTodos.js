import { createReducer } from 'redux-act';
import { sortTodos } from '../actions';

const initialState = true;
/* jshint ignore:start */
export default createReducer(
  {
    [sortTodos]: (state) => (!state),
  },
  initialState,
);
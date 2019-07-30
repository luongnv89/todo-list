import { createReducer } from 'redux-act';
import { sortTodos } from '../actions';
import produce from 'immer';

const initialState = true;
/* jshint ignore:start */
export default createReducer(
  {
    [sortTodos]: produce((draft) => (draft = !draft)),
  },
  initialState,
);

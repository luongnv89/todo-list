import { createReducer } from 'redux-act';
import { changeHeaderMessage } from '../actions';

const initialState = 'Focus, focus, focus';
/* jshint ignore:start */
export default createReducer(
  {
    [changeHeaderMessage]: (state, message) => (state = message),
  },
  initialState,
);

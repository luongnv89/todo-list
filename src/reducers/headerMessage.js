import { createReducer } from 'redux-act';
import { changeHeaderMessage } from '../actions';
import { getRandomHeaderMessage } from '../utils';

const initialState = getRandomHeaderMessage();
/* jshint ignore:start */
export default createReducer(
  {
    [changeHeaderMessage]: (state, message) => (state = message),
  },
  initialState,
);

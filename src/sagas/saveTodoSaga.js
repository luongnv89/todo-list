import { takeLatest, put } from 'redux-saga/effects';
import * as ls from '../clientStorage/localStorage';
import { fetchTodoReceived, fetchTodoFailed} from '../actions';
// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    console.log(fetchTodoFailed, fetchTodoReceived);
    ls.saveObject('TODO-LIST', action.payload);
    // dispatch a success action to the store with the new dog
    yield put({type: 'SAVE_TODO_RECEIVED'});
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({type: 'SAVE_TODO_FALED', error});
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest('SAVE_TODO_REQUEST', workerSaga);
}

import { takeLatest, put } from 'redux-saga/effects';
import * as ls from '../clientStorage/localStorage';
import { fetchTodoReceived, fetchTodoFailed} from '../actions';
// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
  try {
    const todos = ls.getObject('TODO-LIST');
    // dispatch a success action to the store with the new dog
    yield put(fetchTodoReceived(todos === null ? [] : todos));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(fetchTodoFailed(error));
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* watcherSaga() {
  yield takeLatest('FETCH_TODO_REQUEST', workerSaga);
}

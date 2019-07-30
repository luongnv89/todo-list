import { all, fork } from 'redux-saga/effects';
import watcherLoadTodoSaga from './loadTodoSaga';
import watcherSaveTodoSaga from './saveTodoSaga';

export default function* rootSaga() {
  yield all([fork(watcherLoadTodoSaga), fork(watcherSaveTodoSaga)]);
}

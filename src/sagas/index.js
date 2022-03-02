import { fork } from 'redux-saga/effects';
import { watchApiRequest } from './apiTester';

export default function* rootSaga() {
  yield [fork(watchApiRequest)]
}

import { takeEvery } from 'redux-saga/effects';
import { authTransfer, GET_API_BOOKS, idTransfer, passwordResetTransfer, registryTransfer } from '@store/reducers';

import { authWorker, passwordResetWorker, registryWorker } from './auth';
import { getBookWorker } from './book';
import { addBooksWatcher } from './books';

export { addBooksWorker, addBooksWatcher } from './books';
export { registryWorker, authWorker, passwordResetWorker } from './auth';
export { getBookWorker } from './book';

export function* rootSaga() {
  yield takeEvery(GET_API_BOOKS, addBooksWatcher);
  yield takeEvery(idTransfer, getBookWorker);
  yield takeEvery(registryTransfer, registryWorker);
  yield takeEvery(authTransfer, authWorker);
  yield takeEvery(passwordResetTransfer, passwordResetWorker);
}

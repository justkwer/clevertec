import { takeEvery } from 'redux-saga/effects';
import { idTransfer } from '@store/reducers/book';
import { GET_API_BOOKS } from '@store/reducers/books';

import { getBookWorker } from './book';
import { addBooksWatcher } from './books';

export { addBooksWorker, addBooksWatcher } from './books';
export { getBookWorker } from './book';

export function* rootSaga() {
  yield takeEvery(GET_API_BOOKS, addBooksWatcher);
  yield takeEvery(idTransfer, getBookWorker);
}

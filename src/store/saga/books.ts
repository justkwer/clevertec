import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { api } from '@core/api';
import { BookItems, Categories } from '@core/types';
import { addBooks, addCategories, GET_API_BOOKS, toggleError, toggleLoading } from '@store/reducers/books';
import { AxiosResponse } from 'axios';

export function* addBooksWorker() {
  try {
    yield put(toggleLoading(true));
    const { data }: AxiosResponse<BookItems[]> = yield call(api.get, '/api/books');

    yield put(addBooks(data));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleLoading(false));
    yield put(toggleError(true));
  }
}

export function* addCategoriesWorker() {
  try {
    const { data }: AxiosResponse<Categories[]> = yield call(api.get, '/api/categories');

    yield put(addCategories(data));
  } catch {
    yield put(toggleLoading(false));
    yield put(toggleError(true));
  }
}

export function* allWatcher() {
  yield fork(addBooksWorker);
  yield fork(addCategoriesWorker);
}

export function* addBooksWatcher() {
  yield takeEvery(GET_API_BOOKS, allWatcher);
}

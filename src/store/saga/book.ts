import { call, put } from 'redux-saga/effects';
import { api } from '@core/api';
import { BookItem } from '@core/types';
import { addBook } from '@store/reducers/book';
import { toggleError, toggleLoading } from '@store/reducers/books';
import { AxiosResponse } from 'axios';

export function* getBookWorker(action: { payload: string }) {
  try {
    yield put(toggleLoading(true));
    yield put(addBook({} as BookItem));
    const { data }: AxiosResponse<BookItem> = yield call(api.get, `/api/books/${action.payload}`);

    yield put(addBook(data));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleError(true));
    yield put(toggleLoading(false));
  }
}

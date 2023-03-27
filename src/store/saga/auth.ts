import { call, put } from 'redux-saga/effects';
import { api } from '@core/api';
import {
  authorizationError,
  PathsToPage,
  registrationError,
  registrationErrorUnique,
  registrationSuccess,
} from '@core/constants';
import { AuthRequest, PasswordResetRequest, RegisterResponse, RegistryRequest } from '@core/types';
import { changeError, toggleLoading } from '@store/reducers';
import { AxiosError, AxiosResponse } from 'axios';

export function* registryWorker(action: { payload: RegistryRequest }) {
  try {
    yield put(toggleLoading(true));
    yield call(api.post, '/api/auth/local/register', action.payload);
    yield put(changeError(registrationSuccess));
    yield put(toggleLoading(false));
  } catch (error) {
    yield put(changeError((error as AxiosError).status === 400 ? registrationErrorUnique : registrationError));
    yield put(toggleLoading(false));
  }
}

export function* authWorker(action: { payload: AuthRequest }) {
  try {
    yield put(toggleLoading(true));
    const { data }: AxiosResponse<RegisterResponse> = yield call(api.post, '/api/auth/local', action.payload);

    localStorage.setItem('jwt', data.jwt);
    localStorage.setItem('name', data.user.firstName);
    yield put(toggleLoading(false));
    window.location.href = PathsToPage.Main;
  } catch (error) {
    yield put(changeError(authorizationError));
    yield put(toggleLoading(false));
  }
}

export function* passwordResetWorker(action: { payload: PasswordResetRequest }) {
  try {
    yield put(toggleLoading(true));
    yield call(api.post, '/api/auth/reset-password', action.payload);
    yield put(changeError(registrationSuccess));
    yield put(toggleLoading(false));
  } catch {
    yield put(toggleLoading(false));
  }
}

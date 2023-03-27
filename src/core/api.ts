import { apiUrl } from '@core/constants';
import axios from 'axios';

export const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use((config) => {
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${jwt}`;
  }

  return config;
});

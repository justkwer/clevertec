import { AuthRequest, AuthState, FormMessageProp, PasswordResetRequest, RegistryRequest } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GET_API_AUTH = 'getApiAuth';

const initialState: AuthState = {
  error: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeError: (state, action: PayloadAction<FormMessageProp | undefined>) => {
      // eslint-disable-next-line no-param-reassign
      state.error = action.payload;
    },
    registryTransfer: (state, action: PayloadAction<RegistryRequest>) => ({
      ...state,
    }),
    authTransfer: (state, action: PayloadAction<AuthRequest>) => ({
      ...state,
    }),
    passwordResetTransfer: (state, action: PayloadAction<PasswordResetRequest>) => ({
      ...state,
    }),
  },
});

export const { changeError, registryTransfer, authTransfer, passwordResetTransfer } = authSlice.actions;
export const getApiAuth = () => ({ type: GET_API_AUTH });
export const auth = authSlice.reducer;

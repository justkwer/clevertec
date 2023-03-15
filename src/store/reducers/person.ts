import { PersonState } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: PersonState = {
  name: undefined,
};

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.name = action.payload;
    },
  },
});

export const { changeName } = personSlice.actions;

export const person = personSlice.reducer;

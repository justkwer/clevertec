import { searchTextDef } from '@core/constants';
import { FormState } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: FormState = {
  text: searchTextDef,
  filter: true,
  list: true,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.text = action.payload;
    },
    toggleFilter: (state) => ({
      ...state,
      filter: !state.filter,
    }),
    toggleList: (state) => ({
      ...state,
      list: !state.list,
    }),
  },
});

export const { changeText } = formSlice.actions;
export const { toggleFilter } = formSlice.actions;
export const { toggleList } = formSlice.actions;

export const form = formSlice.reducer;

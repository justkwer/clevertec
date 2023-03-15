import { BookItem, BookState } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GET_API_BOOK = 'getApiBook';

const initialState: BookState = {
  book: {},
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookItem>) => ({
      ...state,
      book: action.payload,
    }),
    idTransfer: (state, action: PayloadAction<string>) => ({
      ...state,
    }),
  },
});

export const { addBook } = bookSlice.actions;
export const { idTransfer } = bookSlice.actions;
export const getApiBook = () => ({ type: GET_API_BOOK });
export const book = bookSlice.reducer;

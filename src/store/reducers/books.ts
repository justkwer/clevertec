import { BookItems, BooksState, Categories } from '@core/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GET_API_BOOKS = 'getApiBooks';

const initialState: BooksState = {
  books: undefined,
  categories: undefined,
  error: false,
  loading: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks: (state, action: PayloadAction<BookItems[]>) => ({
      ...state,
      books: action.payload,
    }),
    addCategories: (state, action: PayloadAction<Categories[]>) => ({
      ...state,
      categories: action.payload,
    }),
    toggleError: (state, action: PayloadAction<boolean>) => ({
      ...state,
      error: action.payload,
    }),
    toggleLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const { addBooks } = booksSlice.actions;
export const { addCategories } = booksSlice.actions;
export const { toggleError } = booksSlice.actions;
export const { toggleLoading } = booksSlice.actions;
export const getApiBooks = () => ({ type: GET_API_BOOKS });
export const books = booksSlice.reducer;

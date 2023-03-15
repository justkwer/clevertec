import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@core/hooks/redux';
import { getApiBooks } from '@store/reducers/books';

import { BookItems } from './books-items';
import { BooksNavigation } from './books-navigation';
import { BooksStyled } from './styled';

export const Books = () => {
  const { error } = useAppSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApiBooks());
  }, [dispatch]);

  return (
    <BooksStyled>
      {!error && <BooksNavigation />}
      <BookItems />
    </BooksStyled>
  );
};

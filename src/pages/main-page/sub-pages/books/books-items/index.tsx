import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { searchTextDef } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { P } from '@core/theme';
import { searchRegExp } from '@core/utils';
import { BookCard } from '@pages/book-page/book';

import { BookItemsStyled } from './styled';

export const BookItems = () => {
  const { category } = useParams();
  const { categories, books, error } = useAppSelector((state) => state.books);

  const { list, filter, text } = useAppSelector((state) => state.form);

  const categoryFilter = categories?.find((el) => el.path === category)?.name;

  const categoryBooks = useMemo(
    () => (category === 'all' ? books : books?.filter((book) => book.categories.includes(categoryFilter as string))),
    [category, books, categoryFilter]
  );

  const filteredBooks = useMemo(
    () =>
      categoryBooks
        ? [...categoryBooks].sort((a, b) => ((filter ? b : a).rating ?? 1) - ((filter ? a : b).rating ?? 0))
        : categoryBooks,

    [categoryBooks, filter]
  );

  const resultBooks = useMemo(
    () =>
      filteredBooks && text !== searchTextDef
        ? filteredBooks.filter((el) => el.title.match(searchRegExp(text)))
        : filteredBooks,
    [filteredBooks, text]
  );

  return (
    <BookItemsStyled isWrap={list}>
      {!error && categoryBooks?.length !== 0 ? (
        resultBooks?.length === 0 ? (
          <P data-test-id='search-result-not-found'>По запросу ничего не найдено</P>
        ) : (
          resultBooks?.map((props) => <BookCard {...props} key={props.id} category={category} />)
        )
      ) : (
        <P data-test-id='empty-category'>В этой категории книг ещё нет</P>
      )}
    </BookItemsStyled>
  );
};

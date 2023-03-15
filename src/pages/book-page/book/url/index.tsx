import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@core/hooks/redux';

import { BookUrlStyled } from './styled';

export const BookUrl: FC<{ category: string; title: string }> = ({ category, title }) => {
  const { categories } = useAppSelector((state) => state.books);
  const categoryFilter = categories?.find((el) => el.path === category);

  return (
    <BookUrlStyled>
      <NavLink to={`/books/${category}`} data-test-id='breadcrumbs-link'>
        {categoryFilter?.name ?? 'Все книги'}
      </NavLink>{' '}
      / <span data-test-id='book-name'>{title}</span>
      <div />
    </BookUrlStyled>
  );
};

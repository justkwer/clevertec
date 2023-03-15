import { FC, useMemo } from 'react';
import { useAppSelector } from '@core/hooks/redux';
import { Categories } from '@core/types';

import { LinkCustomStyled } from './styled';

export const LinkCustom: FC<Categories & { burger: boolean }> = ({ name, path, burger }) => {
  const { books } = useAppSelector((state) => state.books);

  const count = useMemo(() => books?.filter((book) => book.categories.includes(name)).length, [books, name]);

  return (
    <LinkCustomStyled to={`books/${path}`}>
      <p data-test-id={burger ? `burger-${path}` : `navigation-${path}`}>{name}</p>
      <span data-test-id={burger ? `burger-book-count-for-${path}` : `navigation-book-count-for-${path}`}>{count}</span>
    </LinkCustomStyled>
  );
};

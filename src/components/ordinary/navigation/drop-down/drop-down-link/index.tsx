import { NavLink } from 'react-router-dom';
import { LinkCustom } from '@components';
import { PathsToPage } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';

import { DropDownLinkStyled } from './styled';

export const DropDownLink = ({ burger, isOpen }: { burger: boolean; isOpen: boolean }) => {
  const { categories } = useAppSelector((state) => state.books);

  return (
    <DropDownLinkStyled active={isOpen}>
      <NavLink to={PathsToPage.BooksAll} data-test-id={burger ? 'burger-books' : 'navigation-books'}>
        Все книги
      </NavLink>
      {categories && categories.map((props) => <LinkCustom {...props} burger={burger} key={props.id} />)}
    </DropDownLinkStyled>
  );
};

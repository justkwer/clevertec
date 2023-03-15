import { Fragment, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { List, Tale } from '@assets';
import { ButtonCircle } from '@components';
import { toggleList } from '@store/reducers/form';

import { FilterBar } from './filter-bar';
import { SearchBar } from './search-bar';
import { BooksNavigationStyled } from './styled';

export const BooksNavigation = () => {
  const [isActive, setIsActive] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const dispatch = useDispatch();

  const handleClickVisible = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsActive(!isActive);
    dispatch(toggleList());
  };

  return (
    <BooksNavigationStyled visible={isVisible}>
      <SearchBar visible={isVisible} setVisible={handleClickVisible} />
      {isVisible && (
        <Fragment>
          <FilterBar />
          <ButtonCircle isActive={isActive} onClick={handleClick} dataTestId='button-menu-view-window'>
            <Tale />
          </ButtonCircle>
          <ButtonCircle isActive={!isActive} onClick={handleClick} dataTestId='button-menu-view-list'>
            <List />
          </ButtonCircle>
        </Fragment>
      )}
    </BooksNavigationStyled>
  );
};

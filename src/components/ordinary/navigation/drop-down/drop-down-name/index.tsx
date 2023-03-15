import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { DropDownButton } from '@assets';
import { H3 } from '@core/theme';

import { DropDownNameProps } from '../prop';

import { DropDownNameStyled } from './styled';

export const DropDownName: FC<DropDownNameProps> = ({ name, setIsOpen, isOpen, burger }) => {
  const handleOpen = () => setIsOpen(!isOpen);
  const { pathname } = useLocation();

  return (
    <DropDownNameStyled
      onClick={handleOpen}
      isOpen={isOpen}
      active={pathname.search('books') === 1}
      data-test-id={burger ? 'burger-showcase' : 'navigation-showcase'}
    >
      <H3>{name}</H3>
      <DropDownButton />
    </DropDownNameStyled>
  );
};

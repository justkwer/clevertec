import { BurgerMenu, Error, Logo, PageName, Person } from '@components';

import { HeaderMenuStyled } from './styled';

export const HeaderMenu = () => (
  <HeaderMenuStyled>
    <Logo />
    <BurgerMenu />
    <PageName />
    <Person />
    <Error />
  </HeaderMenuStyled>
);

import { BurgerMenu, Error, Loading, Logo, PageName, Person } from '@components';

import { HeaderMenuStyled } from './styled';

export const HeaderMenu = () => (
  <HeaderMenuStyled>
    <Logo />
    <BurgerMenu />
    <PageName />
    <Person />
    <Loading />
    <Error />
  </HeaderMenuStyled>
);

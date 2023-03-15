import { Cleverland, LogoSvg } from '@assets';
import { PathsToPage } from '@core/constants';

import { LogoStyled } from './styled';

export const Logo = () => (
  <LogoStyled to={PathsToPage.Main}>
    <figure>
      <LogoSvg />
    </figure>
    <figcaption>
      <Cleverland />
    </figcaption>
  </LogoStyled>
);

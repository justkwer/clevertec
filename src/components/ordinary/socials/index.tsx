import { Link } from 'react-router-dom';
import { social } from '@core/constants';

import { SocialsStyled } from './styled';

export const Socials = () => (
  <SocialsStyled>
    {social.map(({ name, link, img }) => (
      <Link to={link} key={name}>
        {img}
      </Link>
    ))}
  </SocialsStyled>
);

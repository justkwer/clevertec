import { FC } from 'react';
import { H4 } from '@core/theme';
import { BookInfoProp } from '@core/types';

import { BookAboutStyled } from './styled';

export const BookAbout: FC<{ about: BookInfoProp['about']; inFigure: boolean }> = ({ about, inFigure }) => (
  <BookAboutStyled inFigure={inFigure}>
    <H4>О книге</H4>
    <div>
      <h5>{about}</h5>
    </div>
  </BookAboutStyled>
);

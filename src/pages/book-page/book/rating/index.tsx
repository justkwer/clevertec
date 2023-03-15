import { FC } from 'react';
import { Rating } from '@components';
import { H4 } from '@core/theme';
import { BookItems } from '@core/types';

import { BookRatingStyled } from './styled';

export const BookRating: FC<{ rating: BookItems['rating'] }> = ({ rating }) => (
  <BookRatingStyled>
    <H4>Рейтинг</H4>
    <div>
      <Rating rating={rating} />
      <H4>{rating}</H4>
    </div>
  </BookRatingStyled>
);

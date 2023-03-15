import { FC } from 'react';
import { arrRating, noRating } from '@core/constants';
import { BookItem } from '@core/types';

import { RatingStyled, StarStyled } from './styled';

export const Rating: FC<{ rating: BookItem['rating'] }> = ({ rating }) => (
  <RatingStyled>
    {rating ? arrRating.map((item) => <StarStyled key={item} fill={(item <= rating).toString()} />) : noRating}
  </RatingStyled>
);

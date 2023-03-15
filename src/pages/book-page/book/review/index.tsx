import { FC } from 'react';
import { Feedback } from '@components';
import { BookItem } from '@core/types';

import { BookReviewStyled } from './styled';

export const BookReview: FC<{ comments: BookItem['comments'] }> = ({ comments }) => (
  <BookReviewStyled>
    {comments?.map((props) => (
      <Feedback key={props.id} {...props} />
    ))}
  </BookReviewStyled>
);

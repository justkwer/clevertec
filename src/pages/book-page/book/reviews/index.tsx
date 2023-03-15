import { FC, useState } from 'react';
import { DropDownButton } from '@assets';
import { H4 } from '@core/theme';
import { BookItem } from '@core/types';

import { BookReview } from '../review';

import { BookReviewsStyled, ReviewStyled } from './styled';

export const BookReviews: FC<{ comments: BookItem['comments'] }> = ({ comments }) => {
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <BookReviewsStyled>
      <ReviewStyled active={isVisible}>
        <H4>
          Отзывы <span>{comments?.length ?? 0}</span>
        </H4>
        <DropDownButton onClick={handleClick} data-test-id='button-hide-reviews' />
      </ReviewStyled>
      {isVisible && comments && <BookReview comments={comments} />}
    </BookReviewsStyled>
  );
};

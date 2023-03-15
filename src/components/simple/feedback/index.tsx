import { FC } from 'react';
import { user as Avatar } from '@assets';
import { Rating } from '@components/simple/rating';
import { apiUrl, feedbackDateOptions } from '@core/constants';
import { CommentsProp } from '@core/types';
import { getDate } from '@core/utils';

import { FeedbackStyled, FeedbackUserStyled } from './styled';

export const Feedback: FC<CommentsProp> = ({ rating, text, user, createdAt }) => {
  const { avatarUrl, firstName, lastName } = user;

  return (
    <FeedbackStyled>
      <FeedbackUserStyled>
        <figure>
          <img src={avatarUrl ? apiUrl + avatarUrl : Avatar} alt={firstName} />
          <figcaption>
            <span>
              {firstName} {lastName}
            </span>
            <span>{getDate(createdAt, feedbackDateOptions)}</span>
          </figcaption>
        </figure>
      </FeedbackUserStyled>
      <Rating rating={rating} />
      {text && <p>{text}</p>}
    </FeedbackStyled>
  );
};

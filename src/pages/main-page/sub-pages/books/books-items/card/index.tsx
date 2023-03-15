import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cat } from '@assets';
import { Button, Rating } from '@components';
import { apiUrl, cardDateOptions } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { BookItems } from '@core/types';
import { getDate } from '@core/utils';
import { Title } from '@pages/main-page/sub-pages/books/books-items/card/title';

import { BookCardStyled, FigureStyled } from './styled';

export const BookCard: FC<BookItems & { category?: string }> = (props) => {
  const { image, rating, title, authors, id, issueYear, booking, category } = props;
  const { list } = useAppSelector((state) => state.form);

  const navigate = useNavigate();

  const handleClick = () => navigate(`/books/${category}/${id}`);

  return (
    <BookCardStyled isWrap={list} onClick={handleClick} data-test-id='card'>
      <FigureStyled img={!!image}>{image ? <img src={apiUrl + image.url} alt={title} /> : <Cat />}</FigureStyled>
      <figcaption>
        <Rating rating={rating} />
        <Title title={title} />
        <span>
          {authors}, {issueYear}
        </span>
        <Button active={!booking}>
          {booking?.dateOrder ? `Занята до ${getDate(booking.dateOrder, cardDateOptions)}` : 'Забронировать'}
        </Button>
      </figcaption>
    </BookCardStyled>
  );
};

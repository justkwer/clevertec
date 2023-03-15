import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from '@components';
import { feedbackBtn } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { Section } from '@core/theme';
import { BookItem } from '@core/types';
import { BookAbout, BookContent, BookInfo, BookRating, BookReviews, BookUrl } from '@pages/book-page/book';
import { idTransfer } from '@store/reducers/book';

import { BookPageStyled } from './styled';

export const BookPage = () => {
  const { id, category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(idTransfer(id));
  }, [dispatch, id]);

  const { book } = useAppSelector((state) => state.book);
  const { error } = useAppSelector((state) => state.books);

  const { issueYear, title, categories, images, authors, description, rating, comments, booking, ...prop } =
    book as BookItem;

  return (
    <BookPageStyled>
      <Section>
        <BookUrl category={category ?? 'Все'} title={title ?? ''} />
        {issueYear && !error && (
          <Fragment>
            <BookInfo img={images} name={title} author={authors} booking={booking} about={description} />
            <BookAbout about={description} inFigure={true} />
            <BookRating rating={rating} />
            <BookContent {...prop} categories={categories} issueYear={issueYear} />
            <BookReviews comments={comments} />
            <Button active={true} data-test-id='button-rating'>
              {feedbackBtn}
            </Button>
          </Fragment>
        )}
      </Section>
    </BookPageStyled>
  );
};

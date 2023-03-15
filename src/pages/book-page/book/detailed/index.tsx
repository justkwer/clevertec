import { DetailedInfo } from '../../../../components';

import { BookDetailedStyled } from './styled';

export const BookDetailed = ({ info, name }: { info: string[]; name: string[] }) => (
  <BookDetailedStyled>
    {name.map((el, index) => (
      <DetailedInfo key={el} name={el} info={info[index]} />
    ))}
  </BookDetailedStyled>
);

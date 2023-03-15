import styled from 'styled-components';

import { BookInfoDivStyled } from '../info/styled';

export const BookAboutStyled = styled(BookInfoDivStyled)<{ inFigure: boolean }>`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;
  display: ${({ inFigure }) => inFigure && 'none'};

  div {
    ${({ theme }) => theme.flex.column};
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    display: ${({ inFigure }) => !inFigure && 'none'};
    display: ${({ inFigure }) => inFigure && 'block'};

    padding-top: 15px;
    gap: 16px;
    h5,
    h4 {
      font-size: 1rem;
      line-height: 24px;
    }
    h5 {
      font-weight: 400;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 8px;
    padding-top: 40px;
  }
`;

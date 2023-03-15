import styled from 'styled-components';

export const BookReviewStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 42px;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 32px;
  }
`;

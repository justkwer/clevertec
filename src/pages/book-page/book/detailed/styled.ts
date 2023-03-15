import styled from 'styled-components';

export const BookDetailedStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;
  flex-wrap: wrap;
  justify-content: start;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1.125rem;
    line-height: 28px;
    gap: 14px;
  }
`;

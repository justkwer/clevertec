import styled from 'styled-components';

export const BooksStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: flex-start;
  gap: 32px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 19px;
  }
`;

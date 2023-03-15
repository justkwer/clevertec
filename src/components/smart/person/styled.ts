import styled from 'styled-components';

export const PersonStyled = styled.div`
  margin-left: auto;
  ${({ theme }) => theme.flex.row};
  justify-content: end;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    display: none;
  }
`;

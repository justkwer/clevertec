import styled from 'styled-components';

export const AuthorizationPageStyled = styled.div`
  height: 100%;
  ${({ theme }) => theme.flex.column};
  background: ${({ theme }) => theme.gradient.primary};
  gap: 46px;
  padding: 16px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 8px;
  }
`;

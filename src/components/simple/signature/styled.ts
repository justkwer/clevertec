import styled from 'styled-components';

export const SignatureBrStyled = styled.br`
  display: none;
  @media (max-width: ${({ theme }) => theme.media.medium}) {
    display: block;
  }
`;

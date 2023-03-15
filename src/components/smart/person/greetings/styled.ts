import styled from 'styled-components';

export const GreetingsStyled = styled.figcaption`
  span {
    font-size: 0.875em;
    line-height: 129%;
    font-weight: ${({ theme }) => theme.fonts.weight.secondary};
  }
`;

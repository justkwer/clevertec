import styled from 'styled-components';

export const PageGeneratorStyled = styled.ul`
  list-style-type: none;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

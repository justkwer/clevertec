import styled from 'styled-components';

export const DropDownStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;
  padding-bottom: 8px;
  cursor: pointer;
  width: 279px;
`;

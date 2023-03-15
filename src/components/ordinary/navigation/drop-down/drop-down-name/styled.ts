import { Active } from '@core/theme';
import styled from 'styled-components';

export const DropDownNameStyled = styled.div<{ isOpen: boolean; active: boolean }>`
  ${({ theme }) => theme.flex.row};
  gap: 82px;
  justify-content: start;
  padding-bottom: 5px;
  border-bottom: ${({ active, theme }) => active && `2px solid ${theme.colors.primary};`};
  color: ${({ active, theme }) => active && theme.colors.primary};

  h3 {
    ${({ active }) => active && Active}
  }

  & > svg {
    fill: ${({ theme }) => theme.colors.primary};
    transform: ${({ isOpen }) => isOpen && 'rotate(180deg)'};
  }
`;

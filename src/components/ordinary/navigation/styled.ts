import { Active, Link } from '@core/theme';
import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  ${({ theme }) => theme.flex.column};
  gap: 32px;
  align-items: start;

  & > .active {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  & > a {
    ${Link};
    padding-bottom: 8px;
  }

  .active {
    ${Active}
  }
`;

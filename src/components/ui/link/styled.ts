import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkCustomStyled = styled(NavLink)`
  padding-left: 4px;
  display: inline;

  & > p {
    max-width: max-content;
    display: inline;
  }

  span {
    padding-left: 6px;
    color: ${({ theme }) => theme.colors.greyBlack40};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  &.active {
    span {
      color: ${({ theme }) => theme.colors.dark};
      background: none;
    }
  }
`;

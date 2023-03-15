import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogoStyled = styled(Link)`
  ${({ theme }) => theme.flex.row};
  gap: 3px;
  justify-content: start;

  figcaption {
    svg {
      transform: translateY(4px);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    display: none;
  }
`;

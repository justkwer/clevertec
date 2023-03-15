import { rotateKeyframes } from '@core/theme';
import styled from 'styled-components';

export const LoadingStyled = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: rgba(54, 54, 54, 0.3);
  backdrop-filter: blur(10px);
  ${({ theme }) => theme.flex.row};
  align-items: center;
  ${({ active }) => active && 'display: none'};

  svg {
    animation: ${rotateKeyframes} 0.6s infinite linear;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

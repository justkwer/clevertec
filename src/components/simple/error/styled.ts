import styled from 'styled-components';

export const ErrorStyled = styled.div<{ active: boolean }>`
  position: absolute;
  z-index: 3;
  top: 64px;
  width: 100%;
  padding: 24px 32px;
  ${({ theme }) => theme.flex.row};
  gap: 28px;
  background: ${({ theme }) => theme.colors.error};
  border: 1.5px solid ${({ theme }) => theme.colors.negative};
  border-radius: 5px;
  ${({ active }) => active && 'display: none'};

  button {
    margin-left: auto;

    svg {
      fill: ${({ theme }) => theme.colors.dark};
      &:hover {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    padding: 24px 16px;
    align-items: start;
    gap: 15px;

    h5 {
      font-size: 14px;
      line-height: 18px;
      margin-block: 0;
    }

    button {
      svg {
        width: 16px;
        height: 16px;
      }
    }

    & > svg {
      width: 24px;
      height: 24px;
      align-self: start;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 12px 19px;
    gap: 10px;

    & > svg {
      min-width: 18px;
      height: 18px;
      align-self: start;
    }

    button {
      margin-left: 0;
    }
  }
`;

import styled from 'styled-components';

export const ButtonCircleStyled = styled.button<{ isActive: boolean }>`
  width: max-content;
  height: max-content;
  padding: 9.5px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow.primary};
  background: ${({ isActive, theme }) => (isActive ? theme.gradient : theme.colors.white)};

  svg {
    fill: ${({ isActive, theme }) => (isActive ? theme.colors.white : theme.colors.greyBlack40)};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
    svg {
      fill: ${({ isActive, theme }) => !isActive && theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

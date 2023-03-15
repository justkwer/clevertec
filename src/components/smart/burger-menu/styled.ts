import styled from 'styled-components';

export const BurgerMenuStyled = styled.button`
  position: relative;
  z-index: 1;
  width: 32px;
  height: 40px;
  padding: 6.5px 2.5px;

  @media (min-width: ${({ theme }) => theme.media.large}) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    width: 24px;
    height: 30px;
    padding: 5px 2px;
  }
`;

export const BurgerBtnStyled = styled.span<{ active: boolean }>`
  &,
  &:before,
  &:after {
    display: block;
    position: absolute;
    width: 27px;
    height: 2px;
    background: ${({ active, theme }) => (active ? theme.gradient : theme.colors.dark)};
    border-radius: 1px;
    transition-duration: 0.2s;
  }

  transform: ${({ active }) => active && 'rotate(45deg);'};

  &:before {
    content: '';
    top: -8px;
    ${({ active }) => active && 'top: 0; transform: rotate(0);'}
  }

  &:after {
    content: '';
    top: 8px;
    ${({ active }) => active && 'top: 0; transform: rotate(90deg);'}
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    &,
    &:before,
    &:after {
      width: 20px;
    }

    &:before {
      top: -6px;
      ${({ active }) => active && 'top: 0; transform: rotate(0);'}
    }

    &:after {
      top: 6px;
      ${({ active }) => active && 'top: 0; transform: rotate(90deg);'}
    }
  }
`;

export const BurgerMenuWrapStyled = styled.div<{ active: boolean }>`
  position: absolute;
  top: 90px;
  width: 100%;
  max-width: 502px;
  background: ${({ theme }) => theme.colors.greyBlack};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  ${({ active }) => active && 'display: none'};

  & > nav {
    padding: 32px 32px 42px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    max-width: 288px;
    top: 77px;

    & > nav {
      padding: 32px 16px 42px;
    }
  }
`;

export const WrapperStyled = styled.div<{ active: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
  display: ${({ active }) => active && 'none'};
`;

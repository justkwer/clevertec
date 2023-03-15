import styled from 'styled-components';

export const BooksNavigationStyled = styled.form<{ visible: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: 44.4% auto 54px 38px;

  @media (max-width: ${({ theme }) => theme.media.large}) {
    grid-template-columns: 45.4% auto 54px 38px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: ${({ visible }) => (visible ? '16% auto 48px 32px' : 'auto')};
  }
`;

const BooksNavBtnStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  display: inline-flex;
  gap: 8px;
  max-width: max-content;
  border-radius: 30px;
  padding: 7px 15px;
  box-shadow: ${({ theme }) => theme.shadow.primary};
  font-size: 0.875em;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;

export const FilterBarStyled = styled(BooksNavBtnStyled)<{ active: boolean }>`
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.greyBlack40};
    transform: ${({ active }) => !active && 'scale(1, -1)'};
    transition-duration: 0.1s;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 9px;

    span {
      display: none;
    }
  }
`;

export const SearchBarStyled = styled(BooksNavBtnStyled)<{ active: boolean; isFocus: boolean }>`
  & > svg {
    pointer-events: none;
    display: ${({ active }) => !active && 'none'};
    min-width: 16px;
    fill: ${({ theme, isFocus }) => (isFocus ? theme.colors.primary : theme.colors.greyBlack40)};
  }

  input {
    border: none;
    background: none;
    width: 295px;
    letter-spacing: 0.1px;
    caret-color: ${({ theme }) => theme.colors.primary};

    &:focus {
      outline: none;
    }

    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    input {
      width: 219px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 9px;
    height: 32px;

    & > svg {
      pointer-events: ${({ active }) => active && 'auto'};
    }

    input {
      display: ${({ active }) => (active ? 'none' : 'block')};
      width: 245px;
    }
  }
`;

export const SearchBarBtnStyled = styled.button<{ active: boolean }>`
  display: ${({ active }) => active && 'none'};
`;

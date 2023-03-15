import styled from 'styled-components';

export const DropDownLinkStyled = styled.div<{ active: boolean }>`
  ${({ theme, active }) => (active ? theme.flex.column : 'display: none')};
  padding-left: 20px;
  align-items: start;
  gap: 16px;

  .active {
    font-size: 1.125em;
    font-weight: ${({ theme }) => theme.fonts.weight.title};
    line-height: 28px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

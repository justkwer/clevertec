import styled from 'styled-components';

export const MainPageStyled = styled.main`
  box-sizing: border-box;

  section {
    ${({ theme }) => theme.flex.row};
    align-items: start;
    justify-content: flex-start;
    gap: 6px;
    padding-top: 20px;
    padding-bottom: 18px;

    @media (max-width: ${({ theme }) => theme.media.large}) {
      padding-top: 11px;
      nav {
        display: none;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
      padding-top: 0;
      position: relative;
      top: -8px;
    }
  }
`;

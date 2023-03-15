import styled from 'styled-components';

export const HeaderMenuStyled = styled.div`
  position: relative;
  ${({ theme }) => theme.flex.row};
  justify-content: start;
  gap: 120px;
  padding-top: 32px;

  h1 {
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    gap: 24px;

    svg {
      align-self: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding-top: 24px;
    gap: 24px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

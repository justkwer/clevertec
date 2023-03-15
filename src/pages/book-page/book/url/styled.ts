import styled from 'styled-components';

export const BookUrlStyled = styled.div`
  gap: 4px;
  padding: 20px 0;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 18px;
  position: relative;
  width: 100%;

  span {
    display: inline;
  }

  div {
    position: absolute;
    top: 0;
    left: calc(-50vw + 50%);
    width: 100vw;
    height: 100%;
    background: ${({ theme }) => theme.colors.greyBlack};
    z-index: -1;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    top: -10px;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 18px;
  }
`;

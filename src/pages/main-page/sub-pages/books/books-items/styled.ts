import styled, { css } from 'styled-components';

const Row = css`
  ${({ theme }) => theme.flex.row};
  flex-wrap: wrap;
  gap: 24px 21.5px;

  @media (max-width: 1440px) {
    gap: 32px 35px;
    max-width: 640px;
    align-self: center;
  }

  @media (max-width: 767px) {
    max-width: 415px;
  }
`;

const Column = css`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
`;

export const BookItemsStyled = styled.div<{ isWrap: boolean }>`
  ${({ isWrap }) => (isWrap ? Row : Column)};
  justify-content: start;
  border-radius: ${({ theme }) => theme.radius[0]};
  min-width: 100%;

  & > p {
    padding-top: 168px;
    width: 100%;
    text-align: center;
  }
`;

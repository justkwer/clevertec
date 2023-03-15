import styled from 'styled-components';

export const BookRatingStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;

  & > h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBlack10};
    padding-bottom: 16px;
    width: 350px;
  }

  div {
    ${({ theme }) => theme.flex.row};
    gap: 24px;
    div {
      gap: 11px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    padding-top: 17px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding-top: 12px;
    gap: 8px;
    div {
      div {
        gap: 12px;
      }
    }

    svg {
      width: 34px;
      height: 34px;
    }
  }
`;

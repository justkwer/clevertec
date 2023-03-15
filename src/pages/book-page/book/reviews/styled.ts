import styled from 'styled-components';

export const BookReviewsStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;
  padding-top: 20px;

  & > h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBlack10};
    padding-bottom: 16px;
    width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding-top: 40px;
    gap: 14px;
  }
`;

export const ReviewStyled = styled.div<{ active: boolean }>`
  ${({ theme }) => theme.flex.row};
  gap: 24px;

  svg {
    fill: ${({ theme }) => theme.colors.dark};
    ${({ active }) => active && 'transform: rotate(180deg);'};
    transition-duration: 0.6s;
  }

  h4 {
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

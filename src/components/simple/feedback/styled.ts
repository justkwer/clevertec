import styled from 'styled-components';

export const FeedbackStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;

  div ~ div {
    gap: 10px;
  }

  p {
    max-width: 730px;
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 8px;
  }
`;
export const FeedbackUserStyled = styled.div`
  figure {
    ${({ theme }) => theme.flex.row};
    gap: 24px;

    figcaption {
      ${({ theme }) => theme.flex.row};
      gap: 24px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    figure {
      gap: 19px;

      figcaption {
        ${({ theme }) => theme.flex.column};
        gap: 3px;
        align-items: start;

        span {
          font-size: 0.9375rem;
          line-height: 20px;
        }
      }
    }
  }
`;

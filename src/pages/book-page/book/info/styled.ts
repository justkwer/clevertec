import styled from 'styled-components';

export const BookInfoStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 30px;
  align-items: start;
  padding-top: 6px;

  & > figure {
    min-width: 445px;
    height: 593px;
    border-radius: 10px;
    overflow: unset;
  }

  figcaption {
    ${({ theme }) => theme.flex.column};
    gap: 60px;
    align-items: start;
  }

  span {
    color: ${({ theme }) => theme.colors.greyBlack40};
  }

  h5 {
    font-weight: 400;
    font-size: 1em;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  button {
    padding: 14px 96px;
    font-size: 1em;
    border-radius: 30px;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    figure {
      min-width: 136px;
      height: 198px;
    }

    figcaption {
      gap: 48px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    ${({ theme }) => theme.flex.column};
    gap: 15px;
    align-items: center;

    figure {
      width: 188px;
      height: 260px;
    }
  }
`;

export const BookInfoDivStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 30px;
  align-items: start;

  h4 {
    width: 350px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBlack10};
    padding-bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    gap: 29px;

    h2 {
      font-size: 1.5rem;
      line-height: 30px;
    }

    button {
      padding: 14px 54px;
      width: 306px;
      letter-spacing: 0.2px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 25px;
    h2 {
      font-size: 1.125rem;
      line-height: 28px;
    }
    button {
      padding: 11px 0;
      width: 100%;
      font-size: 0.75rem;
      line-height: 18px;
    }

    span {
      font-size: 0.75rem;
      line-height: 18px;
    }
  }
`;

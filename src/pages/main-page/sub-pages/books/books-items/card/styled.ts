import styled, { css } from 'styled-components';

const Row = css`
  padding: 8px 8px 16px 8px;
  width: 190px;
  height: 470px;
  ${({ theme }) => theme.flex.column};
  gap: 16px;

  figure {
    border-radius: ${({ theme }) => theme.radius[0]};
    width: 174px;
    height: 242px;
  }

  figcaption {
    flex-grow: 1;

    button {
      align-self: center;
    }
  }
`;

const Column = css`
  width: 100%;
  padding: 24px 24px 24px 16px;
  ${({ theme }) => theme.flex.row};
  gap: 16px;
  align-items: start;

  figure {
    border-radius: ${({ theme }) => theme.radius[1]};
    width: 146px;
    height: 170px;
  }

  figcaption {
    position: relative;
    height: 160px;

    h3 {
      order: 1;
      font-size: 1.375em;
      line-height: 32px;
    }
    span {
      order: 2;
    }
    div {
      order: 3;
    }
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 174px;
  }

  @media (max-width: 620px) {
    padding: 16px 16px 16px 8px;
    gap: 8px;
    figure {
      width: 70px;
      height: 100px;
      overflow: visible;
    }

    figcaption {
      h3 {
        font-size: 0.875rem;
        line-height: 18px;
      }

      span {
        font-size: 0.75rem;
      }
    }

    button {
      order: 3;
      position: static;
      line-height: 18px;
      padding: 11px 33px;
      width: 186px;
    }
  }
`;

export const BookCardStyled = styled.div<{ isWrap: boolean }>`
  ${({ isWrap }) => (isWrap ? Row : Column)};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  border-radius: ${({ theme }) => theme.radius[0]};

  figure {
    border: 1px solid ${({ theme }) => theme.colors.greyBlack40};
  }

  figcaption {
    width: 100%;
    ${({ theme }) => theme.flex.column};
    justify-content: space-between;
    align-items: start;
  }

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -moz-box;
    -moz-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    line-clamp: 3;

    & > span {
      color: ${({ theme }) => theme.colors.accent};
      font-size: inherit;
    }
  }

  h3,
  span,
  div {
    margin: 0;
    font-size: 0.875em;
    line-height: 18px;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    width: 100%;
  }
`;

export const FigureStyled = styled.figure<{ img: boolean }>`
  display: flex;
  ${({ img, theme }) => img && `background: ${theme.colors.greyBlack}`};
  border: 1px solid ${({ theme }) => theme.colors.greyBlack40};
  justify-content: center;

  svg {
    margin: auto;
  }
`;

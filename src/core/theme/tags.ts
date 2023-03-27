import styled, { css } from 'styled-components';

export const Link = css`
  font-size: 1.125rem;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Active = css`
  background: ${({ theme }) => theme.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = css`
  font-size: 2rem;
  line-height: 40px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1.125rem;
    line-height: 28px;
  }
`;

export const SpanCss = css`
  font-weight: ${({ theme }) => theme.fonts.weight.span};
  font-size: 0.75rem;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.greyBlack40};
`;

export const ButtonSvgStroke = css`
  svg {
    stroke: ${({ theme }) => theme.colors.dark};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`;
export const PlaceholderCss = css`
  font-weight: ${({ theme }) => theme.fonts.weight.primary};
  font-size: 0.875rem;
  line-height: 18px;
`;

export const ButtonCss = css`
  background: ${({ theme }) => theme.gradient.primary};

  &:hover {
    background: ${({ theme }) => theme.gradient.hover};
  }

  &:active {
    background: ${({ theme }) => theme.gradient.pressed};
    box-shadow: ${({ theme }) => theme.shadow.hover};
  }
`;
export const Section = styled.section`
  max-width: ${({ theme }) => theme.sizes.container.width[0]}px;
  padding: ${({ theme }) => theme.sizes.container.padding[0]};

  @media (max-width: ${({ theme }) => theme.media.large}) {
    max-width: ${({ theme }) => theme.sizes.container.width[1]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[1]};
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    max-width: ${({ theme }) => theme.sizes.container.width[2]}px;
    padding: ${({ theme }) => theme.sizes.container.padding[2]};
  }
`;

export const H1 = styled.h1`
  ${Title};
`;

export const H2 = styled.h2`
  font-size: 2rem;
  line-height: 40px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    font-size: 1.125rem;
    line-height: 28px;
  }
`;

export const H3 = styled.h3`
  ${Link};
`;

export const H4 = styled.h4`
  font-size: 1.125rem;
  line-height: 28px;
  font-weight: ${({ theme }) => theme.fonts.weight.title};
`;
export const H5 = styled.h5`
  font-size: 1rem;
  line-height: 24px;
  font-weight: ${({ theme }) => theme.fonts.weight.secondary};
  color: ${({ theme }) => theme.colors.greyBlack40};
`;

export const P = styled.p`
  ${Title};
  color: ${({ theme }) => theme.colors.greyBlack40};
`;

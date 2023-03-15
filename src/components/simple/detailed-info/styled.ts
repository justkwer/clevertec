import styled from 'styled-components';

export const DetailedInfoStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  align-items: start;
  gap: 70px;

  h5 {
    min-width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    gap: 18px;

    span,
    h5 {
      font-size: 0.875rem;
      line-height: 18px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 8px;

    span {
      font-size: 0.75rem;
      line-height: 16px;
    }
  }
`;

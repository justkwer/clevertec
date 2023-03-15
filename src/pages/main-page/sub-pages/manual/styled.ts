import styled from 'styled-components';

export const ManualStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  align-items: start;
  gap: 32px;

  & > ul {
    & > li {
      & ~ li {
        padding-top: 16px;
      }

      font-weight: ${({ theme }) => theme.fonts.weight.secondary};
    }

    & > ul {
      padding-left: 30px;

      & > ul {
        padding-left: 30px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    gap: 24px;
    padding-top: 13px;

    ul {
      & > ul {
        font-size: 0.9375rem;
        line-height: 20px;
      }
    }
  }
`;

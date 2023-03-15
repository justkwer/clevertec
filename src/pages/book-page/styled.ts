import styled from 'styled-components';

export const BookPageStyled = styled.main`
  section {
    ${({ theme }) => theme.flex.column};
    gap: 42px;
    align-items: start;
    & > button {
      padding: 14px 100px;
      font-size: 1em;
      border-radius: 30px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    h4 {
      font-size: 1rem;
      line-height: 24px;
    }

    section {
      & > button {
        padding: 14px 0;
        width: 100%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    h4 {
      font-size: 1.125rem;
      line-height: 28px;
    }

    section {
      gap: 4px;

      & > button {
        margin-top: 18px;
        padding: 12px 0;
        width: 100%;
        font-size: 0.75rem;
        line-height: 18px;
      }
      h4 {
        font-size: 1.125rem;
        padding-bottom: 8px;
        width: 100%;
      }
      h5 {
        font-size: 0.75rem;
        line-height: 18px;
      }
    }
  }
`;

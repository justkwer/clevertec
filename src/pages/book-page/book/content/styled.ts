import styled from 'styled-components';

export const BookContentStyled = styled.div`
  width: 100%;
  padding-top: 20px;
  ${({ theme }) => theme.flex.column};
  gap: 16px;
  align-items: start;

  & > div {
    display: grid;
    grid-template-columns: 42.8% auto;
  }
  & > h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.greyBlack10};
    padding-bottom: 16px;
    width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.media.large}) {
    & > div {
      grid-template-columns: 52.3% auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding-top: 16px;
    gap: 8px;

    & > div {
      ${({ theme }) => theme.flex.column};
      align-items: start;
      gap: 14px;
    }
  }
`;

import styled from 'styled-components';

export const SeparatorStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.greyBlack20};

  @media (max-width: 684px) {
    ${({ theme }) => theme.flex.column};
    gap: 16px;

    span {
      font-size: 0.9375em;
      line-height: 20px;
    }
  }
`;

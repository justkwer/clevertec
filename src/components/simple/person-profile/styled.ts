import styled from 'styled-components';

export const PersonProfileStyled = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.greyBlack20};
  padding-bottom: 20px;

  & > div {
    padding: 32px;
    ${({ theme }) => theme.flex.column};
    gap: 40px;
    align-items: start;

    @media (max-width: ${({ theme }) => theme.media.medium}) {
      padding: 32px 16px;
    }
  }

  h3:hover {
    cursor: pointer;
  }
`;

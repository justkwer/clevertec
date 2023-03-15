import styled from 'styled-components';

export const RegistrationTitleStyled = styled.div`
  ${({ theme }) => theme.flex.column};
  gap: 8px;
  align-items: start;

  h2 {
    font-size: 1.5rem;
    line-height: 30px;
  }

  h3 {
    font-weight: ${({ theme }) => theme.fonts.weight.secondary};
    font-size: 1rem;
    line-height: 18px;
  }
`;

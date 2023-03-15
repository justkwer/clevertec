import styled from 'styled-components';

export const RegistrationStyled = styled.form`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 48px 56px;
  ${({ theme }) => theme.flex.column};
  align-items: start;
  gap: 32px;
  width: 100%;
  max-width: 528px;

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: 24px 16px;
  }
`;

import styled from 'styled-components';

export const FormMessageStyled = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  padding: 48px 95px;
  ${({ theme }) => theme.flex.column};
  gap: 32px;
  text-align: center;
`;

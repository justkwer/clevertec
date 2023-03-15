import styled from 'styled-components';

export const ButtonStyled = styled.button<{ active?: boolean }>`
  padding: ${({ active }) => (active ? '8px 23px' : '7px 25px')};
  background: ${({ active, theme }) => (active ? theme.gradient : theme.colors.greyBlack)};
  border-radius: 20px;
  font-weight: ${({ theme }) => theme.fonts.weight.secondary};
  font-size: 0.75rem;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.greyBlack40)};
  border: ${({ active, theme }) => !active && `1px solid ${theme.colors.greyBlack40}`};

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    padding: ${({ active }) => (active ? '11px 68px' : '11px 66px')};
  }
`;

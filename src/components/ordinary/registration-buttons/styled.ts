import { NavLink } from 'react-router-dom';
import { ButtonCss, ButtonSvgStroke } from '@core/theme';
import styled from 'styled-components';

export const RegistrationButtonsStyled = styled.div`
  width: 100%;
  ${({ theme }) => theme.flex.column};
  align-items: start;
  gap: 16px;

  & > button {
    width: 100%;
    padding: 14px 30px;
    ${ButtonCss};
  }

  div {
    ${({ theme }) => theme.flex.row};
    justify-content: start;
    gap: 16px;
    flex-wrap: wrap;
    row-gap: 4px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.medium}) {
    & > button {
      padding: 11px 30px;
    }
  }
`;

export const FormButtonStyled = styled(NavLink)`
  ${({ theme }) => theme.flex.row};
  gap: 15px;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  font-weight: ${({ theme }) => theme.fonts.weight.secondary};
  font-size: 0.75rem;
  ${ButtonSvgStroke};
`;

import { ButtonSvgStroke } from '@core/theme';
import { RegistrationStyled } from '@pages/authorization-page/registration/styled';
import styled from 'styled-components';

export const RecoveryStyled = styled(RegistrationStyled)`
  & > a:first-child {
    margin: -48px 0 0 -56px;
    padding: 20px 16px;
    width: 100vw;
    border-radius: 16px 16px 0 0;
    max-width: 528px;
    ${({ theme }) => theme.flex.row};
    justify-content: start;
    gap: 12px;
    background: ${({ theme }) => theme.colors.greyBlack};
    ${ButtonSvgStroke};

    svg {
      transform: rotateY(180deg);
      stroke: ${({ theme }) => theme.colors.greyBlack20};
    }

    @media (max-width: ${({ theme }) => theme.media.medium}) {
      margin: -24px 0 0 -16px;
    }
  }
`;

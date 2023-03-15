import { FC, PropsWithChildren } from 'react';
import { ButtonCircleProp } from '@core/types';

import { ButtonCircleStyled } from './styled';

export const ButtonCircle: FC<PropsWithChildren<ButtonCircleProp>> = ({ children, isActive, onClick, dataTestId }) => (
  <ButtonCircleStyled isActive={isActive} onClick={onClick} disabled={isActive} data-test-id={dataTestId}>
    {children}
  </ButtonCircleStyled>
);

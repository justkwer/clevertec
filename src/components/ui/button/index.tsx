import { FC, PropsWithChildren } from 'react';
import { ButtonProp } from '@core/types';

import { ButtonStyled } from './styled';

export const Button: FC<PropsWithChildren<ButtonProp>> = ({ children, active, typeButton }) => (
  <ButtonStyled active={active} disabled={!active} type={typeButton ?? 'button'}>
    {children}
  </ButtonStyled>
);

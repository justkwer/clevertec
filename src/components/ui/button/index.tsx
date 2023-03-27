import { FC, PropsWithChildren } from 'react';
import { ButtonProp } from '@core/types';

import { ButtonStyled } from './styled';

export const Button: FC<PropsWithChildren<ButtonProp>> = ({ children, active, typeButton, onClick }) => (
  <ButtonStyled active={active ?? true} disabled={active} type={typeButton ?? 'button'} onClick={onClick}>
    {children}
  </ButtonStyled>
);

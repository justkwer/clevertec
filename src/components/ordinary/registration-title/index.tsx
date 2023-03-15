import { FC } from 'react';
import { RegistrationTitleStyled } from '@components/ordinary/registration-title/styled';

export const RegistrationTitle: FC<{ title: string; subTitle?: string }> = ({ title, subTitle }) => (
  <RegistrationTitleStyled>
    <h2>{title}</h2>
    <h3>{subTitle}</h3>
  </RegistrationTitleStyled>
);

import { FC } from 'react';
import { Arrow } from '@assets';
import { Button } from '@components';
import { FormButtonStyled, RegistrationButtonsStyled } from '@components/ordinary/registration-buttons/styled';
import { RegistrationButtonsProp } from '@core/types';

export const RegistrationButtons: FC<RegistrationButtonsProp> = ({ stepButton, subTitle, subButton, redirect }) => (
  <RegistrationButtonsStyled>
    <Button typeButton='submit'>{stepButton}</Button>
    <div>
      <span>{subTitle}</span>
      <FormButtonStyled to={redirect}>
        {subButton}
        <Arrow />
      </FormButtonStyled>
    </div>
  </RegistrationButtonsStyled>
);

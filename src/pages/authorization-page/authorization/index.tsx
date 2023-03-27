import { MouseEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ButtonEye, RegistrationButtons, RegistrationInput, RegistrationTitle } from '@components';
import { authorizationForm, PathsToPage } from '@core/constants';
import { AuthRequest } from '@core/types';
import { InputValues } from '@core/types/types';
import { AuthorizationStyled } from '@pages/authorization-page/authorization/styled';
import { authTransfer } from '@store/reducers';

export const Authorization = () => {
  const [hidden, setHidden] = useState(true);
  const { title, inputFirst, inputSecond, buttons } = authorizationForm;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValues>({
    mode: 'onBlur',
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  const handleHidden = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const onSubmit = (data: FieldValues) => {
    dispatch(authTransfer(data as AuthRequest));
  };

  return (
    <AuthorizationStyled data-test-id='auth-form' onSubmit={handleSubmit(onSubmit)}>
      <RegistrationTitle title={title} />
      <RegistrationInput inputProp={inputFirst} inputForm={{ register, errors }} />
      <RegistrationInput inputProp={inputSecond} hidden={hidden} isLink={true} inputForm={{ register, errors }}>
        <ButtonEye hidden={hidden} onClick={handleHidden} />
      </RegistrationInput>
      <RegistrationButtons
        stepButton={buttons.primary}
        subTitle={buttons.secondary}
        subButton={buttons.join}
        redirect={PathsToPage.Registry}
      />
    </AuthorizationStyled>
  );
};

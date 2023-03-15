import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonEye, RegistrationButtons, RegistrationInput, RegistrationTitle } from '@components';
import { authorizationForm, PathsToPage } from '@core/constants';
import { AuthorizationStyled } from '@pages/authorization-page/authorization/styled';

export const Authorization = () => {
  const [hidden, setHidden] = useState(true);
  const { title, inputFirst, inputSecond, buttons } = authorizationForm;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });

  const handleHidden = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const onSubmit = (data: object) => {
    console.log(data);
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

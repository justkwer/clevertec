import { MouseEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonEye, RegistrationButtons, RegistrationInput, RegistrationTitle } from '@components';
import { PathsToPage, registrationForm } from '@core/constants';
import { RegistrationStyled } from '@pages/authorization-page/registration/styled';

export const Registration = () => {
  const [step, setStep] = useState(0);
  const [hidden, setHidden] = useState(true);
  const { title, steps } = registrationForm;

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
    if (step > 1) {
      console.log(data);
    } else setStep((prev) => prev + 1);
  };

  return (
    <RegistrationStyled data-test-id='register-form' onSubmit={handleSubmit(onSubmit)}>
      <RegistrationTitle title={title} subTitle={`Шаг ${step + 1} из 3`} />
      <RegistrationInput inputProp={steps[step].inputFirst} inputForm={{ register, errors }} />
      <RegistrationInput inputProp={steps[step].inputSecond} hidden={hidden} inputForm={{ register, errors }}>
        <ButtonEye hidden={hidden} onClick={handleHidden} />
      </RegistrationInput>
      <RegistrationButtons
        stepButton={steps[step].buttons.primary}
        subTitle={steps[0].buttons.secondary}
        subButton={steps[0].buttons.join}
        redirect={PathsToPage.Authorization}
      />
    </RegistrationStyled>
  );
};

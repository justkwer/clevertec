import { MouseEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ButtonEye, RegistrationButtons, RegistrationInput, RegistrationTitle } from '@components';
import { PathsToPage, registrationForm } from '@core/constants';
import { RegistryRequest } from '@core/types';
import { InputValues } from '@core/types/types';
import { RegistrationStyled } from '@pages/authorization-page/registration/styled';
import { registryTransfer } from '@store/reducers';

export const Registration = () => {
  const [step, setStep] = useState(0);
  const [hidden, setHidden] = useState(true);
  const { title, steps } = registrationForm;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValues>({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      password: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
  });

  const handleHidden = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setHidden(!hidden);
  };

  const onSubmit = (data: FieldValues) => {
    if (step > 1) {
      dispatch(registryTransfer(data as RegistryRequest));
    } else setStep((prev) => prev + 1);
  };

  return (
    <RegistrationStyled data-test-id='register-form' onSubmit={handleSubmit(onSubmit)}>
      <RegistrationTitle title={title} subTitle={`Шаг ${step + 1} из 3`} />
      <RegistrationInput inputProp={steps[step].inputFirst} inputForm={{ register, errors }} />
      <RegistrationInput
        inputProp={steps[step].inputSecond}
        hidden={step === 0 && hidden}
        inputForm={{ register, errors }}
      >
        {step === 0 && <ButtonEye hidden={hidden} onClick={handleHidden} />}
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

import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { Arrow } from '@assets';
import { RegistrationButtons, RegistrationInput, RegistrationTitle } from '@components';
import { PathsToPage, recoveryForm } from '@core/constants';
import { InputValues } from '@core/types/types';
import { RecoveryStyled } from '@pages/authorization-page/recovery/styled';

export const Recovery = () => {
  const { bread, title, inputFirst, buttons } = recoveryForm;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputValues>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <RecoveryStyled data-test-id='reset-password-form' onSubmit={handleSubmit(onSubmit)}>
      <NavLink to={PathsToPage.Authorization}>
        <Arrow />
        <span>{bread}</span>
      </NavLink>
      <RegistrationTitle title={title} />
      <RegistrationInput inputProp={inputFirst} inputForm={{ register, errors }} />
      <RegistrationButtons
        stepButton={buttons.primary}
        subTitle={buttons.secondary}
        subButton={buttons.join}
        redirect={PathsToPage.Registry}
      />
    </RecoveryStyled>
  );
};

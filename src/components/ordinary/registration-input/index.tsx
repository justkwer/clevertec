import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ValidationTrue } from '@assets';
import { InputStyled, RegistrationInputStyled } from '@components/ordinary/registration-input/styled';
import { PathsToPage } from '@core/constants';
import { RegistrationInputProp } from '@core/types';
import { customValidate, spanSeparator } from '@core/utils';

export const RegistrationInput: FC<PropsWithChildren<RegistrationInputProp>> = ({
  inputProp,
  children,
  hidden,
  isLink,
  inputForm,
}) => {
  const { subTitle, name, title, rules, link, patterns } = inputProp;
  const { register, errors } = inputForm;
  const errorMessage = errors[name]?.message as string;
  const [value, setValue] = useState('');

  const validHelper = useMemo(() => {
    if (value) {
      const validate = customValidate(value, patterns);

      return validate?.length === 0 ? subTitle : spanSeparator(subTitle as string, validate as string[]);
    }

    return subTitle;
  }, [subTitle, patterns, value]);

  return (
    <RegistrationInputStyled errors={errorMessage}>
      <InputStyled>
        <input
          type={hidden ? 'password' : 'text'}
          placeholder={title}
          {...register(name as 'login' | 'password' | 'firstName' | 'lastName' | 'phone' | 'email', {
            ...rules,
            onChange: (e) => setValue(e.target.value),
          })}
        />
        <label>{title}</label>
        {!errorMessage && value && !Array.isArray(validHelper) && <ValidationTrue />}
        {children}
      </InputStyled>
      <hr />
      <p data-test-id='hint'>{errorMessage ?? validHelper}</p>
      {isLink && <NavLink to={PathsToPage.Recovery}>{link}</NavLink>}
    </RegistrationInputStyled>
  );
};

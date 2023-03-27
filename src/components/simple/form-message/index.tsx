import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegistrationTitle } from '@components/ordinary/registration-title';
import { FormMessageStyled } from '@components/simple/form-message/styled';
import { Button } from '@components/ui/button';
import { FormMessageProp } from '@core/types';
import { changeError } from '@store/reducers';

export const FormMessage: FC<FormMessageProp> = ({ title, subTitle, button }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(changeError(undefined));
    navigate(button.url, { replace: true });
  };

  return (
    <FormMessageStyled data-test-id='status-block'>
      <RegistrationTitle title={title} />
      <p>{subTitle}</p>
      <Button onClick={handleClick}>{button.title}</Button>
    </FormMessageStyled>
  );
};

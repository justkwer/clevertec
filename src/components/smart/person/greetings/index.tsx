import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PathsToPage } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';

import { GreetingsStyled } from './styled';

export const Greetings = () => {
  const { name } = useAppSelector((state) => state.person);
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) navigate(`${PathsToPage.Authorization}`);
  }, [name, navigate]);

  return (
    <GreetingsStyled>
      <span>Привет, {name}</span>
    </GreetingsStyled>
  );
};

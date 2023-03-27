import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PathsToPage } from '@core/constants';

import { GreetingsStyled } from './styled';

export const Greetings = () => {
  const name = localStorage.getItem('name');
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

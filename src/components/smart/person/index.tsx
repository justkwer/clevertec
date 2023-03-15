import { Avatar } from './avatar';
import { Greetings } from './greetings';
import { PersonStyled } from './styled';

export const Person = () => (
  <PersonStyled>
    <Greetings />
    <Avatar />
  </PersonStyled>
);

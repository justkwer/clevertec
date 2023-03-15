import { DropDownLink } from './drop-down-link';
import { DropDownName } from './drop-down-name';
import { DropDownProp } from './prop';
import { DropDownStyled } from './styled';

export const DropDown = ({ name, isActive, burger, handleClick }: DropDownProp) => (
  <DropDownStyled>
    <DropDownName name={name} setIsOpen={handleClick} isOpen={isActive} burger={burger} />
    <DropDownLink burger={burger} isOpen={isActive} />
  </DropDownStyled>
);

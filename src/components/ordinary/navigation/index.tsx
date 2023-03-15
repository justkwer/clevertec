import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navLink } from '@core/constants';

import { DropDown } from './drop-down';
import { NavigationStyled } from './styled';

export const Navigation: FC<{ burger: boolean }> = ({ burger }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const visibleFalse = () => {
    setIsVisible(false);
  };

  return (
    <NavigationStyled>
      {navLink.map((props) =>
        props.link ? (
          <NavLink
            to={props.link}
            key={props.key}
            data-test-id={burger ? props.testBurger : props.test}
            onClick={visibleFalse}
          >
            {props.name}
          </NavLink>
        ) : (
          <DropDown {...props} isActive={isVisible} burger={burger} handleClick={handleClick} />
        )
      )}
    </NavigationStyled>
  );
};

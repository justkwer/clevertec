import { Fragment, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Navigation, PersonProfile } from '../..';

import { BurgerBtnStyled, BurgerMenuStyled, BurgerMenuWrapStyled, WrapperStyled } from './styled';

export const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  useEffect(() => {
    handleClose();
  }, [location]);

  useEffect(() => {
    window.addEventListener('resize', handleClose);

    return () => {
      window.removeEventListener('resize', handleClose);
    };
  });

  return (
    <Fragment>
      <BurgerMenuStyled onClick={handleClick} data-test-id='button-burger'>
        <BurgerBtnStyled active={isActive} />
      </BurgerMenuStyled>
      <BurgerMenuWrapStyled active={!isActive} data-test-id='burger-navigation' onClick={(e) => e.stopPropagation()}>
        <Navigation burger={true} />
        <PersonProfile />
      </BurgerMenuWrapStyled>
      <WrapperStyled active={!isActive} onClick={handleClose} />
    </Fragment>
  );
};

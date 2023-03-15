import { useDispatch } from 'react-redux';
import { Action, Exclamation } from '@assets';
import { ErrorStyled } from '@components/simple/error/styled';
import { error as errorMessage } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { toggleError } from '@store/reducers/books';

export const Error = () => {
  const dispatch = useDispatch();
  const { error } = useAppSelector((state) => state.books);

  const handleClose = () => {
    dispatch(toggleError(false));
  };

  return (
    <ErrorStyled data-test-id='error' active={!error}>
      <Exclamation />
      <h5>{errorMessage}</h5>
      <button type='button' onClick={handleClose}>
        <Action />
      </button>
    </ErrorStyled>
  );
};

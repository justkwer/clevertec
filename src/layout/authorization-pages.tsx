import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { FormMessage } from '@components';
import { useAppSelector } from '@core/hooks/redux';
import { H1 } from '@core/theme';

export const AuthorizationPages = () => {
  const error = useAppSelector((state) => state.auth.error);

  return (
    <Fragment>
      <H1>Cleverland</H1>
      {error ? <FormMessage {...error} /> : <Outlet />}
    </Fragment>
  );
};

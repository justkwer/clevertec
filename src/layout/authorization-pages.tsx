import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { H1 } from '@core/theme';

export const AuthorizationPages = () => (
  <Fragment>
    <H1>Cleverland</H1>
    <Outlet />
  </Fragment>
);

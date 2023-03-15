import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@components';

export const MainPages = () => (
  <Fragment>
    <Navigation burger={false} />
    <Outlet />
  </Fragment>
);

import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@containers';

export const Pages = () => (
  <Fragment>
    <Header />
    <Outlet />
    <Footer />
  </Fragment>
);

import { Fragment, Suspense } from 'react';
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Loading } from '@components';
import { PathsToPage } from '@core/constants';
import { Pages } from '@layout';
import {
  Authorization,
  AuthorizationPage,
  BookPage,
  Books,
  Contract,
  MainPage,
  Manual,
  Recovery,
  Registration,
} from '@pages';

export const App = () => (
  <Fragment>
    <Loading />
    <Suspense fallback='Loading...'>
      <Router>
        <Routes>
          <Route element={<AuthorizationPage />}>
            <Route path={PathsToPage.Authorization} element={<Authorization />} />
            <Route path={PathsToPage.Registry} element={<Registration />} />
            <Route path={PathsToPage.Recovery} element={<Recovery />} />
          </Route>
          <Route path={PathsToPage.Main} element={<Pages />}>
            <Route element={<MainPage />}>
              <Route>
                <Route index={true} element={<Navigate to={PathsToPage.BooksAll} replace={true} />} />
                <Route path={PathsToPage.Books} element={<Books />} />
              </Route>
              <Route path={PathsToPage.Manual} element={<Manual />} />
              <Route path={PathsToPage.Contract} element={<Contract />} />
            </Route>
            <Route path={PathsToPage.Book} element={<BookPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  </Fragment>
);

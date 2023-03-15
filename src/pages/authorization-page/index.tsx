import { AuthorizationPages } from '@layout';
import { AuthorizationPageStyled } from '@pages/authorization-page/styled';

export const AuthorizationPage = () => (
  <AuthorizationPageStyled data-test-id='auth'>
    <AuthorizationPages />
  </AuthorizationPageStyled>
);

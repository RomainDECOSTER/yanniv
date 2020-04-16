import React from 'react';

import { LoginModal, LoginForm } from './components';

const LoginScene = props => (
  <LoginModal hearder={'Qui es tu ?'}>
    <LoginForm />
  </LoginModal>
);

export { LoginScene as Login };

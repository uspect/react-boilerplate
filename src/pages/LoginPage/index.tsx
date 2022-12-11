import React from 'react';
import i18next from 'i18next';

import { ETranslationKeys } from '@/locales/types';

import logo from '@/assets/react.svg';

const LoginPage: React.FC = () => (
  <>
    <div>{i18next.t(ETranslationKeys.APP_NAME)}</div>
    <img alt='' src={logo} />
  </>
);

export default LoginPage;

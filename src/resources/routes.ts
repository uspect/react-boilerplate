import type React from 'react';

import LoginPage from '@/pages/LoginPage';

export const ROUTES = {
  login: '/login',
};

export interface IRoutes {
  path: string;
  Element: React.FC;
}

export const PublicRoutes: IRoutes[] = [
  {
    path: ROUTES.login,
    Element: LoginPage,
  },
];

export const PrivateRoutes: IRoutes[] = [];

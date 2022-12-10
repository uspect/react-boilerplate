import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { ROUTES, PrivateRoutes, PublicRoutes } from '@/resources/routes';
import { accessTokenService } from '@/utils/services/accessTokenService';
import { useIsAuth } from '@/hooks/useIsAuth';

const Router: React.FC = () => {
  const [isAuth, setIsAuth] = useState(useIsAuth());

  const location = useLocation();

  useEffect(() => {
    setIsAuth(Boolean(accessTokenService.getToken()));
  }, [location]);

  return (
    <Routes>
      {PublicRoutes.map(({ path, Element }) => (
        <Route element={<Element />} key={path} path={path} />
      ))}

      {isAuth ? (
        <>
          {PrivateRoutes.map(({ path, Element }) => {
            return <Route element={<Element />} key={path} path={path} />;
          })}

          {/*<Route path="*" element={<Navigate to={} />} /> TODO: uncomment to main page after auth*/}
        </>
      ) : (
        <>
          <Route element={<Navigate to={ROUTES.login} />} path='*' />
        </>
      )}
    </Routes>
  );
};

export default Router;

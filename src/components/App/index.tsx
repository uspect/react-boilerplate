import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { configureStore } from '@reduxjs/toolkit';

import Router from '@/components/Router';

import { GlobalStyles } from '@/utils/helpers/styles/globalStyles';
import { DEFAULT_APP_TITLE } from '@/resources/constants';

export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

const App: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Helmet
          defaultTitle={DEFAULT_APP_TITLE}
          htmlAttributes={{ lang: i18n.language }}
          titleTemplate={`%s - ${DEFAULT_APP_TITLE}`}
        >
          <meta content='' name='description' />
          <meta content='' name='keywords' />
        </Helmet>

        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import App from './components/App';

import '@/locales';

function RootNode() {
  return (
    <HelmetProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </HelmetProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RootNode />,
);

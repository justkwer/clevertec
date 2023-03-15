import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GlobalStyle, theme } from '@core/theme';
import { store } from '@store';
import { ThemeProvider } from 'styled-components';

import { App } from './app';

import '@core/theme/fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

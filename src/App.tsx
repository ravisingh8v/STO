import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { store } from './store/store';
import AppRoutes from './routing/AppRoutes';
import Master from './core/components/Master';
import '@mantine/core/styles.css';
import './index.css';

/**
 * Root App component
 * Sets up Redux store, Router, and Mantine theme
 */
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          theme={{
            fontFamily: "'Roboto Condensed', 'Arial Narrow', sans-serif",
            primaryColor: 'slate',
            colors: {
              slate: [
                '#f2f4f7',
                '#e8ebf0',
                '#dce0e8',
                '#c8d3df',
                '#b2bfd6',
                '#9dabce',
                '#8d9bc6',
                '#6b7ba8',
                '#5a6a96',
                '#3d5166',
              ],
            },
          }}
        >
          <Master>
            <AppRoutes />
          </Master>
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

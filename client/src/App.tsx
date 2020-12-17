import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import { PrimaryTemplate } from './components/template/PrimaryTemplate';
import { BrowserRouter } from 'react-router-dom';

interface Props {}

export const App = (props: Props) => {
  // return ;
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <PrimaryTemplate />
      </BrowserRouter>
    </StoreProvider>
  );
};

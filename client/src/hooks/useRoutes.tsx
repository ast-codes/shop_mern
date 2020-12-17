import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthPage } from '../components/pages/AuthPage';
import { CartPage } from '../components/pages/CartPage';
import { HomePage } from '../components/pages/HomePage';
import { ProductDetail } from '../components/pages/ProductDetail';

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/products/:id" exact>
        <ProductDetail />
      </Route>
      <Route path="/cart" exact>
        <CartPage />
      </Route>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

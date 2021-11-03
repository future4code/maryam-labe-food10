import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from '../Pages/Login/LoginPage'
import SignUpPage from "../Pages/SignUp/SignUpPage";
import ErrorPage from "../Pages/Error/ErrorPage";
import Restaurants from "../Pages/Restaurant/Restaurants";
import FeedPage from "../Pages/Feed/FeedPage";
import ProfilePage from "../Pages/Profile/ProfilePage";
import ShopCart from "../Pages/ShopCart/ShopCart";
import InitialLoading from "../Pages/InitialLoading/InitialLoadingPage";
import AddressPage from "../Pages/Address/AddressPage";
import UpDateProfile from "../Pages/UpDateProfile/UpDadeProfile";
import UpDateAddress from "../Pages/UpDateAddress/UpDateAddressPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <InitialLoading />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/endereço">
          <AddressPage />
        </Route>
        <Route exact path="/feed">
          <FeedPage />
        </Route>
        <Route exact path="/perfil">
          <ProfilePage />
        </Route>
        <Route exact path="/restaurantes/:id">
          <Restaurants/>
        </Route>
        <Route exact path="/carrinho">
          <ShopCart />
        </Route>
        <Route exact path="/perfil/update">
          <UpDateProfile />
        </Route>
        <Route exact path="/endereço/update">
          <UpDateAddress />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
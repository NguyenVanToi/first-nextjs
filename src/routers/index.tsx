// import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
// import { useAppSelector } from "../app/hooks";
import HomeComponent from "../screens/home";
import LoginComponent from "../screens/login";
import SettingsComponent from "../screens/settings";

const PrivateRoute = ({ ...routeProps }: any) => {
  // const isAuth = useAppSelector((state) => state.common.userInfo);
  const isAuth = localStorage.getItem("userInfo");
  if (isAuth) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: "login" }} />;
  }
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <PrivateRoute path="/home" component={HomeComponent} />
        <PrivateRoute path="/settings" component={SettingsComponent} />
        <Route exact path="/" component={LoginComponent} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;

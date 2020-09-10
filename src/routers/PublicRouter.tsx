import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "../components/auth/Login";

export interface PublicRouterProps {}

const PublicRouter: React.SFC<PublicRouterProps> = () => {
  useEffect(() => {
    document.body.className = "hold-transition login-page";
  });

  return (
    <>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    </>
  );
};

export default PublicRouter;

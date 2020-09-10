import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Sidebar from "../components/shared/Sidebar";
import Footer from "../components/shared/Footer";
import GastosCreate from "../components/gastos/GastosCreate";
import HomeScreen from "../components/home/HomeScreen";

export interface AuthRouterProps {}

const AuthRouter: React.SFC<AuthRouterProps> = () => {
  useEffect(() => {
    document.body.className = "hold-transition skin-blue sidebar-mini";
  });
  return (
    <>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/crear-gasto" component={GastosCreate} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default AuthRouter;

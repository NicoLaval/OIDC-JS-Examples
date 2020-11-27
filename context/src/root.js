import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { secure } from "./components/auth";
import { Header, Home, Page } from "./components";

function RouterContainer() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/public" component={Page} />
        <Route exact path="/private" component={secure(Page)} />
        {!pathname.startsWith("/authentication") && <Redirect to="/" />}
      </Switch>
    </>
  );
}

export default RouterContainer;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/constants";
import { allRouts } from "../../routers";

const AppRouter = () => {
  return (
    <Switch>
      {allRouts.map(({ path, Component }, index) => (
        <Route key={index} path={path} component={Component} exact />
      ))}

      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;

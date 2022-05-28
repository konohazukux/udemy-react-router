import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page1">
        <Page1 />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};

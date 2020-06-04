import React from "react";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/SignIn";
import SignUp from "../containers/SignUp";

export const history = createHistory();

const Root = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LoginPage} />
  </Switch>
);

const App = withRouter(Root);

const AppWithRouter = () => (
  <Router history={history}>
    <App />
  </Router>
);

export default AppWithRouter;

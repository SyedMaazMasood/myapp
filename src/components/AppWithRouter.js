import React from "react";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch, withRouter } from "react-router-dom";
import DiscoverPage from "../containers/DiscoverPage";
import FollowingPage from "../containers/FollowingPage";
import HomePage from "../containers/HomePage";
import LoginPage from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import ProfilePage from "../containers/ProfilePage";
import SettingsPage from "../containers/SettingsPage";
import NotFound from "./NotFound";

export const history = createHistory();

const Root = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LoginPage} />
    <Route path="/profile/:id" component={ProfilePage} />
    <Route path="/following" component={FollowingPage} />
    <Route path="/discover" component={DiscoverPage} />
    <Route path="/settings" component={SettingsPage} />
    <Route component={NotFound} />
  </Switch>
);

const App = withRouter(Root);

const AppWithRouter = () => (
  <Router history={history}>
    <App />
  </Router>
);

export default AppWithRouter;

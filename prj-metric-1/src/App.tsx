import React from "react";

import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

import { ProvideAuth, Login, PrivateRoute } from "module/auth";
import { Main } from "module/main";

export default function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <div>Auth</div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/main" component={Main} />
        </Switch>
      </BrowserRouter>
    </ProvideAuth>
  );
}
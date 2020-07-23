import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Login from "./task3/Login";
import Register from "./task3/Register";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/Register" component={Register} />

          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
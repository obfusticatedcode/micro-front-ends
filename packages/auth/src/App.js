import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

const App = ({ onSignIn, history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSignIn={onSignIn}></SignIn>
            </Route>
            <Route path="/auth/signup">
              <Signup onSignIn={onSignIn}></Signup>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;

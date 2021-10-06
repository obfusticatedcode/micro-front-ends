import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

const MarketingAppLazy = lazy(() => import("./components/MarketingApp"));
const AuthAppLazy = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({ productionPrefix: "co" });

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignIn = () => setIsSignedIn(true);
  const handleSignOut = () => setIsSignedIn(false);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <>
          <Header isSignedIn={isSignedIn} onSignOut={handleSignOut} />
          <Suspense
            fallback={
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <CircularProgress />
              </div>
            }
          >
            <Switch>
              <Route path="/auth">
                <AuthAppLazy onSignIn={handleSignIn} />
              </Route>
              <Route path="/" component={MarketingAppLazy} />
            </Switch>
          </Suspense>
        </>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;

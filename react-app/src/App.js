import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./services/auth";
import * as sessionActions from "./store/session";
import { useHistory } from "react-router";
// FORMS
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User/User";
import WelcomePage from "./components/Welcome/Welcome";

function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  let history = useHistory();

  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setLoaded(true));
  // }, [dispatch]);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        await dispatch(sessionActions.restoreUser());
        setAuthenticated(true);
      }
      setAuthenticated(true);
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    history.push("/welcome");
  }

  return (
    <>
      {loaded &&
        <BrowserRouter>
          <Switch>
            <Route path="/welcome" exact={true}>
              <WelcomePage />
            </Route>
            

            <div>
              <NavBar setAuthenticated={setAuthenticated} />
              <ProtectedRoute path="/" exact={true} authenticated>
                <User />
              </ProtectedRoute>
              <ProtectedRoute path="/users" exact={true} authenticated>
                <UsersList />
              </ProtectedRoute>
              <ProtectedRoute path="/users/:userId" exact={true} authenticated>
                <User />
              </ProtectedRoute>
              <ProtectedRoute
                path="/users/:userId/progress"
                exact={true}
                authenticated
              >
                {/* SETUP ROUTE */}
              </ProtectedRoute>
              <ProtectedRoute
                path="/workout/:workoutId"
                exact={true}
                authenticated
              >
                {/* SETUP ROUTE */}
              </ProtectedRoute>
              <ProtectedRoute path="/groups" exact={true} authenticated>
                {/* SETUP ROUTE */}
              </ProtectedRoute>
              <ProtectedRoute path="/groups/:groupId" exact={true}>
                {/* SETUP ROUTE */}
              </ProtectedRoute>
            </div>
          </Switch>
        </BrowserRouter>
      }
    </>
  );
}

export default App;

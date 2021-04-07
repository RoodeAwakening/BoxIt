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
import UsersList from "./components/UsersList";
import User from "./components/User/User";
import WelcomePage from "./components/Welcome/Welcome";
import Workouts from "./components/Workouts/Workouts";

function App() {
  // const [authenticated, setAuthenticated] = useState(true);
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
        ;
      }
      ;
      setLoaded(true);
    })();
  }, []);

  // if (!loaded) {
  //   history.push("/welcome");
  // }

  return (
    <>
      {loaded && (
        <BrowserRouter>
          <Switch>
            <Route path="/welcome" exact={true}>
              <WelcomePage />
            </Route>

            <>
              <NavBar />
              {/* <ProtectedRoute path="/" exact={true} authenticated>
                <User />
              </ProtectedRoute> */}
              <Route path="/" exact={true} >
                <User />
              </Route>
              <Route path="/users" exact={true}>
                <UsersList />
              </Route>
              <Route path="/workout" exact={true}>
                <Workouts />
              </Route>
              <Route path="/users/:userId" exact={true}>
                <User />
              </Route>

              <Route path="/users/:userId/progress" exact={true} >
                {/* SETUP ROUTE */}
              </Route>

              <Route path="/workout/:workoutId" exact={true} >
                {/* SETUP ROUTE */}
              </Route>
              <Route path="/groups" exact={true} >
                {/* SETUP ROUTE */}
              </Route>
              <Route path="/groups/:groupId" exact={true}>
                {/* SETUP ROUTE */}
              </Route>
            </>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

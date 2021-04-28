import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./services/auth";
import * as sessionActions from "./store/session";
import { useSelector, useDispatch } from "react-redux";

// FORMS
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import UsersList from "./components/UsersList";
import User from "./components/User/User";
import WelcomePage from "./components/Welcome/Welcome";
import Workouts from "./components/Workouts/Workouts";
import Groups from "./components/Groups/Groups";
import GroupsIndividual from "./components/GroupsIndividual/GroupsIndividual"
import ActionShots from "./components/ActionShots/ActionShots";
import ProgressPhotos from "./components/ProgressPhotos/ProgressPhotos";
import About from "./components/About/About"


function App() {
  const [authenticated, setAuthenticated] = useState(true);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  





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
  //   return null;
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
              <Route path="/my_progress" exact={true} >
                <ProgressPhotos/>
              </Route>
              <Route path="/users/:userId" exact={true}>
                <User />
              </Route>

              <Route path="/workout/:workoutId" exact={true} >
                {/* SETUP ROUTE */}
              </Route>
              <Route path="/groups" exact={true} >
                <Groups/>
              </Route>
              <Route path="/groups/:groupId" exact={true}>
                <GroupsIndividual/>
              </Route>
              <Route path='/action_shots' exact={true}>
                <ActionShots/>
              </Route>
              <Route path='/about' exact={true}>
                <About/>
              </Route>
            </>
          </Switch>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

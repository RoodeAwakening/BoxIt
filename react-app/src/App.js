import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { authenticate } from "./services/auth";
import * as sessionActions from './store/session'
// FORMS
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// COMPONENTS
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import WelcomePage from "./components/Welcome/Welcome";




function App() {
  // const [authenticated, setAuthenticated] = useState(true);
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

useEffect(()=>{
  dispatch(sessionActions.restoreUser()).then(()=> setLoaded(true))
},[dispatch])

 
  return (
    <>
    {loaded && (
    <BrowserRouter>
      
      <Switch>
        <Route path='/welcome' exact={true}>
          
          <WelcomePage />
        </Route>
       
        
        <div>

        <NavBar />
        <ProtectedRoute path="/" exact={true} >
          {/* SETUP ROUTE */}
        </ProtectedRoute>
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/progress" exact={true} >
          {/* SETUP ROUTE */}
        </ProtectedRoute>
        <ProtectedRoute path="/workout/:workoutId" exact={true} >
          {/* SETUP ROUTE */}
        </ProtectedRoute>
        <ProtectedRoute path="/groups" exact={true} >
          {/* SETUP ROUTE */}
        </ProtectedRoute>
        <ProtectedRoute path="/groups/:groupId" exact={true} >
          {/* SETUP ROUTE */}
        </ProtectedRoute>
        </div>
      </Switch>
    </BrowserRouter>
    )}
    </>
  );
}

export default App;

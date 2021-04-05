import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { loginThunk } from '../../store/session';

const ProtectedRoute = (props) => {
  const sessionUser = useSelector(state => state.session.user)
  return (
    <Route {...props}>

      {props.authenticated ? props.children  : <Redirect to="/welcome" />}
      {/* {sessionUser ? props.children  : <Redirect to="/welcome" />} */}
    </Route>
  )
};


export default ProtectedRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { loginThunk } from '../../store/session';

const ProtectedRoute = props => {
  const sessionUser = useSelector(state => state.session.user)
  console.log('0000',sessionUser);
  return (
    <Route {...props}>
      {sessionUser ? props.children  : <Redirect to="/welcome" />}
    </Route>
  )
};


export default ProtectedRoute;

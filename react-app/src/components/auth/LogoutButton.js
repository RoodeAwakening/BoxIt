import React from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { useHistory } from 'react-router'

const LogoutButton = ({setAuthenticated}) => {
  let history = useHistory()
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    dispatch(sessionActions.logoutThunk());
    history.push("/")
  }

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;

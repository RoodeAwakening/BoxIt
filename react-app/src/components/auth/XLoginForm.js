import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router'
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import * as sessionActions from '../../store/session'

const ModalLogin = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  let history = useHistory()

const onLogin = async (e) => {
  e.preventDefault()
  setErrors([])
  const user = await dispatch(sessionActions.loginThunk({email, password}))
  if (user.errors){
    setErrors(user.errors)
  }else {
    history.push('/')
  }
  return user
}

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };



  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;

import React from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router";

const LogoutButton = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await dispatch(sessionActions.logoutThunk());
    history.push("/welcome");
  };

  return (
    <button onClick={onLogout} className="navbar-right">
      <h3>Logout</h3>
    </button>
  );
};

export default LogoutButton;

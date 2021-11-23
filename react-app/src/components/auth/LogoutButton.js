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

  let style = {
    // color white
    // padding right 5px
    // border-right 2px solid white
    color : "white",
    paddingRight : "5px",
    // borderRight : "2px solid white"


  
  };

  return (
    <div>

      <button style={style} onClick={onLogout}>
      <h4>Logout</h4>
    </button>
    </div>
  );
};

export default LogoutButton;

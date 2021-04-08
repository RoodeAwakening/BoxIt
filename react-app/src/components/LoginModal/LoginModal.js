import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

// import { createPost } from '../../store/posts'
import { useDispatch } from "react-redux";

import Modal from "react-modal";
import "./LoginModal.css";

//styling for modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};

Modal.setAppElement("#root");

export default function ModalLogin({ loginModalIsOpen, setLoginModalisOpen }) {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  let history = useHistory();

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    const user = await dispatch(sessionActions.loginThunk({ email, password }));
    if (user.errors) {
      setErrors(user.errors);
    } else {
      history.push("/");
    }
    return user;
  };

  const updateEmail = (e) => {
    setEmail(e.target.value.toLowerCase());
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const closeLoginModal = (e) => {
    setLoginModalisOpen(false);
  };

  return (
    <Modal isOpen={loginModalIsOpen} style={customStyles}>
      <div className="login-container-exit">
        <button onClick={closeLoginModal}>
          <i className="fas fa-times loginexit"></i>
        </button>
      </div>

      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={onLogin} className="login-form">
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <div className="login-inputs">
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className="login-inputs">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={updatePassword}
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

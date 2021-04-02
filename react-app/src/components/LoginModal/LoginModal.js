import React, { useState } from "react";

import { useHistory } from "react-router-dom";

// import { createPost } from '../../store/posts'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import { loginThunk } from "../../store/session";
import "./LoginModal.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
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
    const user = await dispatch(loginThunk({ email, password }));
    if (user.errors) {
      setErrors(user.errors);
    } else {
      history.push("/");
    }
    return user;
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const closeLoginModal = (e) => {
    setLoginModalisOpen(false);
  };

  return (
    <Modal isOpen={loginModalIsOpen} style={customStyles}>
        <div>
          <button onClick={closeLoginModal}>
            <i class="fas fa-times"></i>
          </button>
          
        </div>

      <div className='login-container'>

        <h1>Login</h1>
        <form onSubmit={onLogin} className='login-form'>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
           
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <div>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}

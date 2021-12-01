import React, { useContext, useEffect, useState } from "react";
import * as sessionActions from "../../../store/session";
import { useHistory } from "react-router-dom";
import styles from './LoginModal.module.css'

// import { createPost } from '../../store/posts'
import { useDispatch } from "react-redux";

import Modal from "react-modal";

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


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    const user = await dispatch(sessionActions.loginThunk({ email, password }));
    console.log('user',user);
    if (user.errors) {
      alert(user.errors)
      setErrors(user.errors);
    }
     else {
      history.push("/");
    }
    
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
      <div className={styles.login_container_exit}>
        <button onClick={closeLoginModal}>
          <i className="fas fa-times loginexit"></i>
        </button>
      </div>

      <div className={styles.login_container}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className={styles.login_form}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <div className={styles.login_inputs}>
              <input
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className={styles.login_inputs}>
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

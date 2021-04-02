import React, { useState } from "react";

import { useHistory } from "react-router-dom";

// import { createPost } from '../../store/posts'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import { signup } from "../../store/session";
import "./SignupModal.css";

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

export default function ModalSignup({
  signupModalIsOpen,
  setSignupModalisOpen,
}) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [DOB, setDOB] = useState("");
  const [user_name, setUsername] = useState("");
  const [profile_photo, setProfilePhoto] = useState("");
  const [boxing_level, setBoxingLevel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(
        signup({
          first_name,
          last_name,
          DOB,
          user_name,
          profile_photo,
          boxing_level,
          email,
          password,
        })
      );
      if (user.errors) {
      } else {
        history.push("/");
      }
      return user;
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateDOB = (e) => {
    setDOB(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateProfilePhoto = (e) => {
    console.log("-a-", e.target.value);
    setProfilePhoto(e.target.files[0]);
  };

  const updateBoxingLevel = (e) => {
    setBoxingLevel(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const closeSignupModal = (e) => {
    setSignupModalisOpen(false);
  };

  if (sessionUser) {
    return <Redirect to="/" />;
  }

  return (
    <Modal isOpen={signupModalIsOpen} style={customStyles}>
      <div>
        <div>
          <button onClick={closeSignupModal}>
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form onSubmit={onSignUp}>
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Fist Name"
              onChange={updateFirstName}
              value={first_name}
            ></input>
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={updateLastName}
              value={last_name}
            ></input>
          </div>
          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="DOB"
              placeholder="Date of Birth"
              onChange={updateDOB}
              value={DOB}
            ></input>
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              placeholder="User Name"
              onChange={updateUsername}
              value={user_name}
            ></input>
          </div>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label>Boxing Level</label>
            <select
              name="boxingLevel"
              onChange={updateBoxingLevel}
              value={boxing_level}
            >
              <option value="Beginner">--Please Choose an Option--</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label>Repeat Password</label>
            <input
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <label>Profile Photo</label>
            <input
              type="file"
              name="profile_photo"
              placeholder="Profile Photo"
              onChange={updateProfilePhoto}
              required={true}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Modal>
  );
}

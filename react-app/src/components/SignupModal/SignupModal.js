import React, { useState } from "react";

import { useHistory } from "react-router-dom";

// import { createPost } from '../../store/posts'
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import { signup } from "../../store/session";
import "./SignupModal.css";
import boxer1 from '../../images/boxer1.jpg'
import boxer2 from '../../images/boxer2.jpg'


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
      <div className="signup-container">
        <div>
          <button onClick={closeSignupModal}>
            <i class="fas fa-times"></i>
          </button>
          
          <div className="signUp-header">
            <h1>At-Home Boxing Workouts</h1>
            <h2>Experience BoxIt from any device, anytime.</h2>
            <h2>Reach your goals with workouts tailored to you.</h2>
          </div>
          <div className='singup-boxer-images'>

          <div>
            <img src={boxer1} className='signup-boxer'/>
          </div>
          <div>
            <img src={boxer2} className='signup-boxer'/>
          </div>
          </div>
        </div>
        <form onSubmit={onSignUp} className="signup-form">
          <div className="signup-names">
            <div>
              <input
                className="signup-form-text-input"
                type="text"
                name="firstName"
                placeholder="Fist Name"
                onChange={updateFirstName}
                value={first_name}
              ></input>
            </div>
            <div>
              <input
                className="signup-form-text-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={updateLastName}
                value={last_name}
              ></input>
            </div>
          </div>

          <div className="signup-email-username">
            <div>
              <input
                className="signup-form-text-input"
                type="text"
                name="userName"
                placeholder="User Name"
                onChange={updateUsername}
                value={user_name}
              ></input>
            </div>

            <div>
              <input
                className="signup-form-text-input"
                type="text"
                name="email"
                placeholder="Email"
                onChange={updateEmail}
                value={email}
              ></input>
            </div>
          </div>
          <div className="signup-form-password">
            <div>
              <input
                className="signup-form-text-input"
                type="password"
                name="password"
                placeholder="Password"
                onChange={updatePassword}
                value={password}
              ></input>
            </div>
            <div>
              <input
                className="signup-form-text-input"
                type="password"
                name="repeat_password"
                placeholder="Confirm Password"
                onChange={updateRepeatPassword}
                value={repeatPassword}
                required={true}
              ></input>
            </div>
          </div>
          <div>
            <input
              className="signup-form-text-input"
              id="signup-dob-input"
              type="date"
              name="DOB"
              placeholder="Date of Birth"
              onChange={updateDOB}
              value={DOB}
            ></input>
          </div>
          <div>
            <div className="signup-boxing-experience-input">
              <div >
                <h4 >
                  Boxing experience
                </h4>
              </div>

              <select
                className="signup-boxing-experience-input"
                name="boxingLevel"
                onChange={updateBoxingLevel}
                value={boxing_level}
              >
                <option value="Beginner">--Choose an Option--</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </div>
            <div className="signup-profile-photo-label">
              <div>
                <label for="profile_photo" className='signup-profile-photo-label'>Profile Photo</label>
              </div>
              <input
                className="signup-profile-photo"
                type="file"
                name="profile_photo"
                placeholder="Profile Photo"
                onChange={updateProfilePhoto}
                required={true}
              ></input>
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Modal>
  );
}

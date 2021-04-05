import React, { useState } from "react";
import ModalSignup from "../SignupModal/SignupModal";
import ModalLogin from "../LoginModal/LoginModal";
import * as sessionActions from '../../store/session'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import "./Welcome.css";

export default function WelcomePage({ authenticated, setAuthenticated }) {
  let history = useHistory()

	const dispatch = useDispatch()

  //modal component
 
  const [signupModalIsOpen, setSignupModalisOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalisOpen] = useState(false);

  const changeSignupModal = () => {
    setSignupModalisOpen(true);
  };

  const changeLoginModal = () => {
    setLoginModalisOpen(true);
  };

  const setDemoLogin = async e => {
		e.preventDefault()
		const email = 'demo@aa.io'
		const password = 'password'
		const user = await dispatch(sessionActions.loginThunk({ email, password }))
		if (!user.errors) history.push('/')
		return user
	}

  return (
    <div className="welcomeContainer">
      {/* TOP OF WELCOME */}
      <div className="welcomeContainer-top-video">
        <video
          id="splash_trading-video"
          src="https://boxit.s3.us-east-2.amazonaws.com/video/welcomeHeaderVideo.m4v"
          autoPlay
          loop
          muted
        />

        <div className="welcomeContainer-top-text">
          <h2 id="welcomeContainer-top-h2-text-1">Your AI Boxing Coach </h2>
          <h2 id="welcomeContainer-top-h2-text-2">
            Unlock a BETTER , FITTER, HEALTHIER You!
          </h2>
          <button
            id="welcomeContainer-top_button_signup-up"
            onClick={changeSignupModal}
          >
            Signup Today
          </button>
          <ModalSignup
            signupModalIsOpen={signupModalIsOpen}
            setSignupModalisOpen={setSignupModalisOpen}
          />
          <h2>Already have an account?</h2>
          <div className="welcome-top_have-account">
            <div>
              <button
                id="welcomeContainer-top_button_loginin"
                onClick={changeLoginModal}
              >
                Login
              </button>
              <ModalLogin
                loginModalIsOpen={loginModalIsOpen}
                setLoginModalisOpen={setLoginModalisOpen}
              />
            </div>
            <div>
              <button 
              id="welcomeContainer-top_button_demo"
              onClick={setDemoLogin}
              >Demo</button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER OF WELCOME */}
      <div className="welcomeContainer-footer">
        <h2></h2>
      </div>
    </div>
  );
}

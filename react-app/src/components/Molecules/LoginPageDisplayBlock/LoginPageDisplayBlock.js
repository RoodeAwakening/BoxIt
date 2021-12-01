import React, { useState } from "react";
import LoginPageHeader from "../../Atoms/LoginPageHeader/LoginPageHeader";
import LoginPageButton from "../../Atoms/LoginPageButton/LoginPageButton";

import ModalSignup from "../SignupModal/SignupModal";
import ModalLogin from "../LoginModal/LoginModal";

import * as sessionActions from '../../../store/session'

import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import styles from "./LoginPageDisplayBlock.module.css";

function LoginPageDisplayBlock() {
  const [signupModalIsOpen, setSignupModalisOpen] = useState(false);
  const [loginModalIsOpen, setLoginModalisOpen] = useState(false);

  let history = useHistory()

	const dispatch = useDispatch()

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
    else{alert(user.errors)}
		return user
	}

  return (
    <div className={styles.login__background}>
      <div className={styles.login__container}>
        <LoginPageHeader
          headerText={"Your AI Boxing Coach"}
          subHeaderText={"Unlock a BETTER , FITTER, HEALTHIER You!"}
        />
        <LoginPageButton text={"Sign up today"} onClick={changeSignupModal} />
        <ModalSignup
            signupModalIsOpen={signupModalIsOpen}
            setSignupModalisOpen={setSignupModalisOpen}
          />
        <LoginPageHeader subHeaderText={"Already have an account?"} />
        <div className={styles.login__container_login}>
          <LoginPageButton text={"Login"} onClick={setLoginModalisOpen} />
          <ModalLogin
                loginModalIsOpen={loginModalIsOpen}
                setLoginModalisOpen={setLoginModalisOpen}
              />
          <LoginPageButton
            text={"Demo"}
              onClick={setDemoLogin}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPageDisplayBlock;

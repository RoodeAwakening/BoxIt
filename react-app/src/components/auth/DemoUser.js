import React from 'react'
import * as sessionActions from '../../store/session'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './auth.css'

const LoginForm = () => {
	let history = useHistory()

	const dispatch = useDispatch()

	const setDemoLogin = async e => {
		e.preventDefault()
		const email = 'demo@aa.io'
		const password = 'password'
		const user = await dispatch(sessionActions.loginThunk({ email, password }))
		if (!user.errors) history.push('/')
		return user
	}

	// THIS IS OLD CODE THAT USES THE SETAUTHENTICATE
	// const setDemoLogin = async (e) => {
	//   e.preventDefault();
	//   const email = "demo@aa.io";
	//   const password = "password";
	//   const user = await login(email, password);
	//   setAuthenticated(true);

	//   history.push('/feed')

	// };

	return (
		<form onSubmit={setDemoLogin}>
			<button type="submit" id="demo-login">
				Demo Login
			</button>
		</form>
	)
}

export default LoginForm
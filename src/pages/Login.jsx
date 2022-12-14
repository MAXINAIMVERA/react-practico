import React, { useRef } from 'react';
import '../styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg'

const Login = () => {
	
	const form = useRef(null)

	const submitHandler = (e) => {
		e.preventDefault()
		const formData = new FormData(form.current)
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data)
	}

	return (
		<div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="email" name="email" placeholder="youremail@email.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" onClick={submitHandler}>Sign up</button>
			</div>
		</div>
	);
}

export default Login;

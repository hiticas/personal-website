import React, { useState } from 'react'
import { LoginAPI, GoogleSignInAPI } from '../api/AuthAPI'
import { postUserData } from "../api/FirestoreAPI";
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { getUniqueID } from "../helpers/getUniqueId";

const LoginComponent = () => {
	let navigate = useNavigate();
	const [credentails, setCredentials] = useState({});
	const login = async () => {
		try {
			let res = await LoginAPI(credentails.email, credentails.password);
			localStorage.setItem("userEmail", res.user.email);
			navigate("/home");
		} catch (err) {
			console.log(err);
		}
	};

	const googleSignIn = async () => {
		try {
			let res = await GoogleSignInAPI();
			postUserData({
				userID: getUniqueID(),
				name: res.user.displayName,
				email: res.user.email,
				imageLink:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			});
			localStorage.setItem("userEmail", res.user.email);
			navigate("/home");
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			<h1>Developement in Progress..</h1>
			<h1>LoginComponent</h1>
			<input
				onChange={(event) =>
					setCredentials({ ...credentails, email: event.target.value })
				}
				type="email"
				className="common-input"
				placeholder="Email or Phone"
			/>
			<input
				onChange={(event) =>
					setCredentials({ ...credentails, password: event.target.value })
				}
				type="password"
				className="common-input"
				placeholder="Password"
			/>
			<button onClick={login}>Log in</button>
			<button onClick={() => navigate("/register")}>Sign In</button>
			<GoogleButton onClick={googleSignIn}>Log in wit Google</GoogleButton>
		</div>
	)
}

export default LoginComponent
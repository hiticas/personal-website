import React, { useMemo, useState } from 'react'
import { onLogout } from '../api/AuthAPI'
import { useNavigate } from 'react-router-dom';

import { getCurrentUser } from "../api/FirestoreAPI";

const HomeComponent = () => {
	let navigate = useNavigate();
	
	const [currentUser, setCurrentUser] = useState(null);
	useMemo(() => {
		getCurrentUser(setCurrentUser);
	}, []);

	const logout = async () => {
		try {
			let res = await onLogout();
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			<h1>Developement in Progress..</h1>
			<h1>HomeComponent</h1>
			<h1>{currentUser?.name}</h1>
			<div>{currentUser?.email}</div>
			<button onClick={logout} className="login-btn">
				Log Out
			</button>
		</div>
	)
}

export default HomeComponent
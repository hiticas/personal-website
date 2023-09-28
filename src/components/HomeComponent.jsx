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
	console.log(currentUser);

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
			<div>HomeComponent</div>
			<h1>{currentUser?.email}</h1>
			<div>{currentUser?.name}</div>
			<button onClick={logout} className="login-btn">
				Log Out
			</button>
		</div>
	)
}

export default HomeComponent
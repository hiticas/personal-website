import React, { useEffect } from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom';

const Home = () => {
	let navigate = useNavigate();
	useEffect(() => {
		onAuthStateChanged(auth, (res) => {
			if (!res?.accessToken) {
				navigate('/');
			}
		})
	}, []);

	return (
		<HomeComponent />
	)
}

export default Home
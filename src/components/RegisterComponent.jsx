import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";

export default function RegisterComponent() {
	let navigate = useNavigate();
	const [credentails, setCredentials] = useState({
		name: "",
		email: "",
		message: "",
	});
	const register = async () => {
		try {
			// let res = await RegisterAPI(credentails.email, credentails.password);
			postUserData({
				userID: getUniqueID(),
				name: credentails.name,
				email: credentails.email,
				message: credentails.message,
			});
			localStorage.setItem("userEmail", credentails.email);
			// navigate("/home");
			setCredentials({
				name: '',
				email: '',
				message: '',
			});
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="login-wrapper">
			<div className="login-wrapper-inner">
				<h1 className="bg-blue-500 text-white p-4">Developement in Progress..</h1>
				<h1 className="heading">Make the most of your professional life</h1>

				<div className="auth-inputs flex">
					<input
						onChange={(event) =>
							setCredentials({ ...credentails, name: event.target.value })
						}
						value={credentails.name}
						type="text"
						className="border-2 mr-4 common-input"
						placeholder="Your Name"
					/>
					<input
						onChange={(event) =>
							setCredentials({ ...credentails, email: event.target.value })
						}
						value={credentails.email}
						type="email"
						className="border-2 mr-4 common-input"
						placeholder="Email or phone number"
					/>
					<textarea
						onChange={(event) =>
							setCredentials({ ...credentails, message: event.target.value })
						}
						value={credentails.message}
						type="text"
						className="border-2 mr-4 common-input"
						placeholder="Write message"
					/>
				</div>
				<hr />
				<button className="bg-blue-500 text-white p-4 mr-4 login-btn" onClick={register}>
					Send message
				</button>
			</div>
		</div>
	);
}
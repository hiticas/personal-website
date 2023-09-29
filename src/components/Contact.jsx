import React, { useState, useEffect } from "react";
import { postUserData } from "../api/FirestoreAPI";
import { getUniqueID } from "../helpers/getUniqueId";
import { useRef } from "react";

const Contact = ({ scrollToContact }) => {
	const contactSectionRef = useRef(null);

	useEffect(() => {
		if (scrollToContact && contactSectionRef.current) {
			contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [scrollToContact]);

	const [credentails, setCredentials] = useState({
		name: "",
		email: "",
		message: "",
	});
	
	const sendMessage = async () => {
		try {
			postUserData({
				userID: getUniqueID(),
				name: credentails.name,
				email: credentails.email,
				message: credentails.message,
			});
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
		<div className="login-wrappe h-screen" ref={contactSectionRef}>
			<div className="login-wrapper-inner">
				<hr />
				<h1 className="heading">Contact me. Make the most of your professional life.</h1>
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
				<button className="bg-blue-500 text-white p-4 mr-4 login-btn" onClick={sendMessage}>
					Send message
				</button>
				<hr />
			</div>
		</div>
	)
}

export default Contact
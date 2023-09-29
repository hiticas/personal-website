import React, { useState, useEffect } from "react";
import { postUserData } from "../api/FirestoreAPI";
import { getUniqueID } from "../helpers/getUniqueId";
import circles_grey from '../assets/images/circles-grey.jpg';
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
		<div className="contact login-wrappe px-[100px]" ref={contactSectionRef}>
			<div className="login-wrapper-inner relative border-b flex justify-between py-[100px] h-[500px]">
				<div className="w-[40%]">
					<div className="text-white text-7xl mb-[40px]">Contact</div>
					<div className="text-slate-300 text-lg w-[400px]">I would like to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.</div>
					<img className="absolute bottom-0 ml-[-100px]" src={circles_grey} />
				</div>
				<div className="auth-inputs flex flex-col w-[40%]">
					<input
						onChange={(event) =>
							setCredentials({ ...credentails, name: event.target.value })
						}
						value={credentails.name}
						type="text"
						className="text-white border-b-2 px-[20px] py-[10px] mb-4 bg-transparent"
						placeholder="Your Name"
					/>
					<input
						onChange={(event) =>
							setCredentials({ ...credentails, email: event.target.value })
						}
						value={credentails.email}
						type="email"
						className="text-white border-b-2 px-[20px] py-[10px] mb-4 bg-transparent"
						placeholder="Your Email"
					/>
					<textarea
						onChange={(event) =>
							setCredentials({ ...credentails, message: event.target.value })
						}
						value={credentails.message}
						type="text"
						className="text-white border-b-2 px-[20px] py-[10px] mb-4 bg-transparent"
						placeholder="Write message"
					/>
					<button className="text-xl text-white border-b-2 border-blue-700 hover:border-blue-400 pb-2 w-[200px] ml-auto mt-[50px]" onClick={sendMessage}>
						Send message
					</button>
				</div>
			</div>
		</div>
	)
}

export default Contact
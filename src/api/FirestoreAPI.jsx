import { firestore } from "../firebaseConfig";
import {
	addDoc,
	collection,
	onSnapshot,
  } from "firebase/firestore";

let userRef = collection(firestore, "users");

export const postUserData = async (object) => {
	try {
		await addDoc(userRef, object);
		console.log("Document added successfully");
	} catch (err) {
		console.error("Error adding document: ", err);
	}
};

export const getCurrentUser = (setCurrentUser) => {
	const userEmail = localStorage.getItem("userEmail");
	if (userEmail) {
		onSnapshot(userRef, (response) => {
			setCurrentUser(
				response.docs
					.map((docs) => {
						return { ...docs.data(), id: docs.id };
					})
					.find((item) => {
						return item.email === userEmail;
					})
			);
		});
	} else {
		setCurrentUser(null); 
	}
};
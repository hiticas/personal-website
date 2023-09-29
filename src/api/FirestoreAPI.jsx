import { firestore } from "../firebaseConfig";
import {
	addDoc,
	collection,
  } from "firebase/firestore";

let userRef = collection(firestore, "messages");

export const postUserData = async (object) => {
	try {
		await addDoc(userRef, object);
		console.log("Document added successfully");
	} catch (err) {
		console.error("Error adding document: ", err);
	}
};
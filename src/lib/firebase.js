import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: `${process.env.REACT_APP_API_KEY}`,
	authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
	projectId: `${process.env.REACT_APP_PROJECT_ID}`,
	storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
	appId: `${process.env.REACT_APP_APP_ID}`,
};

// const firebaseConfig = {
// 	apiKey: "AIzaSyA6CN23cMmiYBzX8M0uHFKBipSUmL-7xh8",
// 	authDomain: "zovy-app.firebaseapp.com",
// 	projectId: "zovy-app",
// 	storageBucket: "zovy-app.appspot.com",
// 	messagingSenderId: "585035474377",
// 	appId: "1:585035474377:web:e269755f5f913bd3b9b418",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function register(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function signIn(email, password) {
	return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
	return signOut(auth);
}

// Custom Hook
export function useAuth() {
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
		return unsub;
	}, []);

	return currentUser;
}

export { auth, app };

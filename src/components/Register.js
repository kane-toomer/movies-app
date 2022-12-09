import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { register, auth } from "../lib/firebase";

import logo from "../assets/mememoji2.svg";

import "../App.css";

const Register = () => {
	const [error] = useAuthState(auth);
	const navigate = useNavigate();
	const emailRef = useRef();
	const passwordRef = useRef();

	async function handleRegistration() {
		try {
			await register(emailRef.current.value, passwordRef.current.value).then(
				() => {
					navigate("/browse");
				}
			);
		} catch {
			alert(error.message);
		}
	}

	return (
		<>
			<main className="relative flex flex-1 flex-col overflow-hidden py-8 px-4 sm:px-6 lg:px-8">
				<div className="relative flex flex-1 flex-col items-center justify-center pt-12 pb-16">
					<div className="w-full max-w-sm">
						<div className="flex justify-center mb-10">
							<img className="h-36 w-auto" src={logo} alt="Your Company" />
						</div>
						<h2
							className="font-bold text-3xl mb-3 pb-3 text-center"
							style={{ letterSpacing: "1px" }}>
							Welcome to Zovy!
						</h2>
						<p className="text-base text-xl text-center mb-5">
							Register to start streaming!
						</p>

						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6">
								Email
							</label>
							<input
								type="email"
								name="email"
								className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400"
								required
								placeholder="johnny.appleseed@mail.com"
								ref={emailRef}
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="email"
								className="block text-sm font-semibold leading-6">
								Password
							</label>
							<input
								type="password"
								name="password"
								className="mt-2 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400"
								required
								placeholder="las_vegas_1"
								ref={passwordRef}
							/>
						</div>
						<button
							type="submit"
							className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-blue-700 text-white hover:bg-blue-900 w-full"
							onClick={handleRegistration}>
							<span>Sign Up</span>
						</button>
					</div>
				</div>
				<footer className="relative shrink-0">
					<div className="space-y-4 text-sm sm:flex sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
						<p className="text-center sm:text-left">
							Already have an account?{" "}
							<a className="font-bold underline text-blue-500" href="/signin">
								Sign In Instead
							</a>
						</p>
					</div>
				</footer>
			</main>
		</>
	);
};

export default Register;

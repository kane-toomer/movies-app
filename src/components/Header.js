import React, { useState } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { logout } from "../lib/firebase";
import logo from "../assets/mememoji2.svg";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	const navigate = useNavigate();

	async function handleLogout() {
		try {
			await logout().then(() => {
				navigate("/");
			});
		} catch {
			alert("Error!");
		}
	}

	return (
		<>
			<Disclosure as="nav" className="mx-5">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between">
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<div className="flex flex-shrink-0 items-center">
										<img
											className="block h-12 w-auto lg:hidden"
											src={logo}
											alt="Your Company"
										/>
										<img
											className="hidden h-12 w-auto lg:block"
											src={logo}
											alt="Your Company"
										/>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="rounded-full p-1 text-gray-400 hover:text-white">
												<span className="sr-only">Open user menu</span>
												<UserIcon className="h-6 w-6 " aria-hidden="true" />
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95">
											<Menu.Items className="absolute right-0 z-10 mt-2 w-24 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<button
															onClick={handleLogout}
															className={classNames(
																active ? "bg-gray-100" : "",
																"block px-4 py-2 text-sm text-gray-700"
															)}>
															Sign out
														</button>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default Header;

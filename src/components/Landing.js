import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTv, faDesktop } from "@fortawesome/free-solid-svg-icons";
import {
	faXbox,
	faPlaystation,
	faApple,
	faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/mememoji2.svg";
import poster8 from "../assets/topgun.svg";
import poster9 from "../assets/fullHouse.svg";

const navigation = [
	{ name: "Portfolio", href: "https://kanetoomer.com" },
	{ name: "GitHub", href: "https://github.com/kane-toomer" },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/kanetoomer/" },
];

const Landing = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<>
			<div className="bg-white">
				{/* HERO */}
				<div className="isolate bg-white">
					<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
						<svg
							className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
							viewBox="0 0 1155 678"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
								fillOpacity=".3"
								d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
							/>
							<defs>
								<linearGradient
									id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
									x1="1155.49"
									x2="-78.208"
									y1=".177"
									y2="474.645"
									gradientUnits="userSpaceOnUse">
									<stop stopColor="#9089FC" />
									<stop offset={1} stopColor="#FF80B5" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div className="px-6 pt-6 lg:px-8">
						<div>
							<nav
								className="flex h-9 items-center justify-between"
								aria-label="Global">
								<div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
									<a href="#" className="-m-1.5 p-1.5">
										<span className="sr-only">Your Company</span>
										<img className="h-12" src={logo} alt="" />
									</a>
								</div>
								<div className="flex lg:hidden">
									<button
										type="button"
										className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
										onClick={() => setMobileMenuOpen(true)}>
										<span className="sr-only">Open main menu</span>
										<Bars3Icon className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="font-semibold text-gray-900 hover:text-gray-900 no-underline hover:underline">
											{item.name}
										</a>
									))}
								</div>
								<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
									<a
										href="/signin"
										className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20">
										Log in
									</a>
								</div>
							</nav>
							<Dialog
								as="div"
								open={mobileMenuOpen}
								onClose={setMobileMenuOpen}>
								<Dialog.Panel
									focus="true"
									className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
									<div className="flex h-9 items-center justify-between">
										<div className="flex">
											<a href="#" className="-m-1.5 p-1.5">
												<span className="sr-only">Your Company</span>
												<img className="h-12" src={logo} alt="" />
											</a>
										</div>
										<div className="flex">
											<button
												type="button"
												className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
												onClick={() => setMobileMenuOpen(false)}>
												<span className="sr-only">Close menu</span>
												<XMarkIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</div>
									<div className="mt-6 flow-root">
										<div className="-my-6 divide-y divide-gray-500/10">
											<div className="space-y-2 py-6">
												{navigation.map((item) => (
													<a
														key={item.name}
														href={item.href}
														className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
														{item.name}
													</a>
												))}
											</div>
											<div className="py-6">
												<a
													href="/signin"
													className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">
													Log in
												</a>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Dialog>
						</div>
					</div>
					<main>
						<div className="relative px-6 lg:px-8">
							<div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
								<div>
									<div>
										<h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-center sm:text-6xl">
											Stream ondemand content for free
										</h1>
										<p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
											All of the latest box office hits, binge worthy tv shows
											and familar classics in one place. Unlimted streaming
											24/7.
										</p>
										<div className="mt-8 flex gap-x-4 sm:justify-center">
											<a
												href="/register"
												className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
												Get started
												<span
													className="ml-2 text-indigo-200"
													aria-hidden="true">
													&rarr;
												</span>
											</a>
										</div>
									</div>
									<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
										<svg
											className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
											viewBox="0 0 1155 678"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
												fillOpacity=".3"
												d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
											/>
											<defs>
												<linearGradient
													id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
													x1="1155.49"
													x2="-78.208"
													y1=".177"
													y2="474.645"
													gradientUnits="userSpaceOnUse">
													<stop stopColor="#9089FC" />
													<stop offset={1} stopColor="#FF80B5" />
												</linearGradient>
											</defs>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</main>
				</div>
				{/* END HERO */}

				{/* SECTION 1 - MOVIES */}
				<div className="bg-white py-12 lg:py-40">
					<div className="relative overflow-hidden">
						<div className="mx-auto max-w-7xl">
							<div className="bg-gray-30 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
								<main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
									<div className="sm:text-center lg:text-left">
										<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
											<span className="block xl:inline">Stream nostalgia</span>{" "}
											<span className="block text-indigo-600 xl:inline">
												on demand
											</span>
										</h1>
										<p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
											Fall in love with familiar favorites all over again in a
											growing collection right here on Zovy.
										</p>
									</div>
								</main>
							</div>
						</div>
						<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
							<img
								className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
								src={poster8}
								alt=""
							/>
						</div>
					</div>
				</div>
				{/* END SECTION 1 - MOVIES */}

				{/* SECTION 2 - TV SHOWS */}
				<div className="bg-white lg:py-40">
					<div className="relative overflow-hidden">
						<div className="mx-auto max-w-7xl">
							<div className="pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
								<main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
									<div className="sm:text-center lg:text-left">
										<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
											<span className="block xl:inline">Family time</span>{" "}
											<span className="block text-indigo-600 xl:inline">
												like it's 1995
											</span>
										</h1>
										<p className="mt-3 pr-1 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
											The best time is family time. Watch all of your family
											favorites right here on Zovy.
										</p>
									</div>
								</main>
							</div>
						</div>
						<div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
							<img
								className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
								src={poster9}
								alt=""
							/>
						</div>
					</div>
				</div>
				{/* END SECTION 2 - TV SHOWS */}

				{/* WAYS TO WATCH */}
				<div className="bg-white mt-10 sm:mt-0 py-12 bg-[url('https://tailwindui.com/img/beams-components.png')]">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="lg:text-center">
							<h2 className="text-lg font-semibold text-indigo-600">
								How to Stream
							</h2>
							<p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
								Stream Zovy on all of your devices
							</p>
							<p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
								Stream Zovy on unlimited devices, from your phone to your smart
								watch. You can view your favorite anywhere, anytime and on any
								device!
							</p>
						</div>

						<div className="mt-16">
							<dl className="flex justify-center space-x-6 text-gray-700">
								<div className="flex items-center justify-center rounded-md">
									<FontAwesomeIcon icon={faTv} className="h-6 w-6" />
								</div>
								<div className="flex items-center justify-center rounded-md">
									<FontAwesomeIcon icon={faApple} className="h-6 w-6" />
								</div>
								<div className="flex items-center justify-center rounded-md">
									<FontAwesomeIcon icon={faAndroid} className="h-6 w-6" />
								</div>
								<div className="flex items-center justify-center rounded-md">
									<FontAwesomeIcon icon={faDesktop} className="h-6 w-6" />
								</div>
								<div className="flex items-center justify-center rounded-md">
									<FontAwesomeIcon icon={faXbox} className="h-6 w-6" />
								</div>
								<div className="flex items-center justify-center rounded-md">
									<FontAwesomeIcon icon={faPlaystation} className="h-6 w-6" />
								</div>
							</dl>
						</div>
					</div>
				</div>
				{/* END WAYS TO WATCH */}

				{/* CTA */}
				<div className="bg-gray-700">
					<div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							<span className="block">Ready to dive in?</span>
							<span className="block text-indigo-500">
								Stream your favorites for free today.
							</span>
						</h2>
						<div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a
									href="/register"
									className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
									Get started
								</a>
							</div>
							<div className="ml-3 inline-flex rounded-md shadow">
								<a
									href="/register"
									className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50">
									Have an Account?
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* END CTA */}
			</div>
		</>
	);
};

export default Landing;

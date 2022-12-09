import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
	HeroButton,
	HeroContainer,
	HeroDescription,
	HeroTitle,
} from "./Hero.styles";
import { PlayIcon } from "@heroicons/react/24/outline";

function Hero({ movie }) {
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null);

	const handleClick = () => {
		setOpen(true);
	};

	return (
		<HeroContainer background={movie?.backdrop_path}>
			<HeroTitle>{movie?.name}</HeroTitle>
			<HeroDescription>{movie?.overview}</HeroDescription>
			<button
				type="button"
				className="mr-5 mt-4 rounded-md bg-gray-700 bg-opacity-50 px-4 py-2 hover:bg-gray-900"
				onClick={() => handleClick()}>
				<span className="sr-only">Play Movie</span>
				<div className="flex items-center justify-center">
					<PlayIcon className="h-5 mr-2" />
					<p className="font-medium text-lg">Play</p>
				</div>
			</button>
			<Transition.Root show={open} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-10"
					initialFocus={cancelButtonRef}
					onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
								<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
									<iframe
										title="trailer"
										id="trailer"
										width="100%"
										height="315"
										src="https://www.youtube.com/embed/Lb4IcGF5iTQ"
										frameborder="0"
										allowfullscreen></iframe>
									<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
										<button
											type="button"
											className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}>
											Cancel
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</HeroContainer>
	);
}

export default Hero;

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth";

import imagen from "../../../assets/heroes/banco.jpg";
import { MyModal } from "./MyModal";

const users = {
	email: "arielfajardo@gmail.com",
};

const { email } = users;

export const Navbar = () => {
	const navigate = useNavigate();

	const {
		user,
		// logout
	} = useContext(AuthContext);

	// const onHandleLogin = () => {
	// logout()
	// 	navigate("/login", {
	// 		replace: true,
	// 	});
	// };

	const location = useLocation();

	const { pathname } = location;
	// console.log("pathname: ", pathname);

	return (
		<>
			<div className="min-h-full">
				<Disclosure as="nav" className="bg-gray-950 py-1">
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className=" flex items-baseline ">
											<Link
												className={`${
													pathname === "/" && "text-sky-200 font-bold"
												} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
												to="/"
											>
												Asociaciones
											</Link>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-3">
												{/* Aquí */}

												<Link
													className={`${
														pathname === "/marvel" && "text-sky-200 font-bold"
													} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
													to="/marvel"
												>
													Marvel
												</Link>
												<Link
													className={`${
														pathname === "/dc" && "text-sky-200 font-bold"
													} text-blue-500  transition-colors duration-300 mt-2 hover:text-white hover:bg-slate-200/50 py-2 px-6 rounded-md`}
													to="/dc"
												>
													DC
												</Link>

												<Link
													className={`${
														pathname === "/search" && "text-sky-200 font-bold"
													} text-blue-500  transition-colors duration-300 mt-2 hover:text-white hover:bg-slate-200/50 py-2 px-6 rounded-md `}
													to="/search"
												>
													Search
												</Link>
											</div>
										</div>
									</div>
									<div className="flex space-x-2 font-semibold  invisible md:visible">
										<span>{user?.name}</span>
										<div className="bg-teal-500 rounded-lg">
											<MyModal />
										</div>

										{/* <button>
											onClick={onHandleLogin}
										<img
												className="h-9 w-9 rounded-full"
												src={imagen}
												alt={name}
												title="Login"
											/>
										</button> */}
									</div>

									{/* Aquí */}

									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 mb-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">Open main menu</span>
											{open ? (
												<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
											) : (
												<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							{/* Menú peueño */}
							<Disclosure.Panel className="md:hidden">
								<div className="space-y-4 px-2 pb-3 pt-0 sm:px-3">
									<div className="flex flex-col ">
										<Link
											className={`${
												pathname === "/marvel" && "text-sky-200 font-bold"
											} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
											to="/marvel"
										>
											Marvel
										</Link>
										<Link
											className={`${
												pathname === "/dc" && "text-sky-200 font-bold"
											} text-blue-500  transition-colors duration-300 mt-2 hover:text-white hover:bg-slate-200/50 py-2 px-6 rounded-md`}
											to="/dc"
										>
											DC
										</Link>

										<div className="mb-4">
											<hr className="my-3" />
											<div className="font-semibold  sm:visible flex space-x-4">
												<button>
													<img
														className="h-9 w-9 rounded-full"
														src={imagen}
														alt={user?.name}
														title="Login"
													/>
												</button>
												<div>
													<span className="block text-base font-bold">{user?.name}</span>
													<span className="block text-sm">{email}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</div>
		</>
	);
};

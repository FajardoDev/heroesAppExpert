import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import querystring from "query-string";
import { Error, HeroCard } from "../components";
import { useFormulario } from "../../hooks";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
	const [error, setError] = useState(false);

	// Para apuntar a otra pantalla para hacer la busqueda esta ves vamos apuntar a la misma
	const navigate = useNavigate();
	const location = useLocation();

	const { q = "" } = querystring.parse(location.search);
	// console.log("query: ", query); era query desestructure por q = '' si no viene el q va hacer un '' vacío
	// console.log(location); yarn add query-string

	const heroes = getHeroesByName(q); // Aquí está el array completo

	const { searchText, onInputChange, onResetForm } = useFormulario({
		searchText: q,
	});

	const onHandleSearchSubmit = (e) => {
		e.preventDefault();

		if (searchText.trim().length <= 1) {
			setError("Agregue otros parametros de busqueda...");
			return;
		}
		console.log({ searchText });
		setError(false);
		navigate(`?q=${searchText}`);
		// navigate(`?q=${searchText.toLowerCase().trim()}`);
		// onResetForm(() => (searchText = "")); reset form
	};

	return (
		<>
			<h1 className="mb-2">Search</h1>
			<hr />
			<div className="grid md:grid-cols-[400px_minmax(600px,_1fr)_100px] gap-6">
				<div className="mt-4 space-y-2">
					{error ? <Error>{error}</Error> : <h4 className="text-xl">Searching</h4>}

					<form onSubmit={onHandleSearchSubmit}>
						<label className="relative block max-w-full">
							<span className="sr-only">Search</span>
							<button
								type="submit"
								className={` absolute inset-y-0 right-0 flex items-center pl-6 focus:outline-none rounded-full py-4 px-6 cursor-pointer duration-200 bg-orange-300   hover:bg-orange-400 ${
									error
										? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600 "
										: "focus:border-sky-500 focus:ring-sky-500 border border-white"
								}
						  `}
							>
								<i
									className={`fa-solid fa-magnifying-glass duration-200 text-[1.3rem] mt-1 ${
										error ? "text-red-600/90" : "text-sky-600/90 hover:text-yellow-400"
									} `}
								></i>
							</button>

							<input
								type="text"
								name="searchText"
								// autoComplete="off"
								value={searchText}
								onChange={onInputChange}
								className={`hover:bottom-5 placeholder:italic bg-white w-full border  block  rounded-md py-3 pl-8 pr-3 shadow-md shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
									error
										? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
										: " placeholder:text-sky-600/60  focus:border-sky-500 focus:ring-sky-500 border border-white"
								}     `}
								placeholder={
									error
										? "No hay coincidencias, Intente con otro hero.."
										: "Buscar heroes...."
								}
							/>
						</label>
					</form>
				</div>

				<div className="mt-3 space-y-2 mb-5">
					<h4 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-pink-500 text-center font-bold mb-2">
						Search result
					</h4>

					{/* {q === "" ? (
						<div className="bg-green-500/20 text-green-500 py-3 px-10 rounded-md text-base font-medium ">
							Search a hero
						</div>
					) : (
						heroes.length === 0 && (
							<div className="bg-red-500/20 text-red-500 py-3 px-10 rounded-md text-base font-medium ">
								No hay Heroe con <b>({q})...</b>
							</div>
						)
					)} */}

					<div
						className={` ${
							q !== ""
								? "hidden"
								: "bg-green-500/20 text-green-500 py-3 px-10 rounded-md text-base font-medium "
						}`}
					>
						Search a hero
					</div>

					<div
						className={`${
							heroes.length === 0 && q !== ""
								? "bg-red-500/20 text-red-500 py-3 px-10 rounded-md text-base font-medium"
								: "invisible"
						}`}
					>
						No hay Heroe con <b>({q})...</b>
					</div>

					{heroes.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};

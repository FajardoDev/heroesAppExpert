import {
	Navigate,
	useNavigate,
	useParams,
} from "react-router-dom";
import { useMemo } from "react";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
	// const params = useParams();
	const { id } = useParams();

	const hero = useMemo(() => getHeroById(id), [id]);

	const navigate = useNavigate();

	// Si el heroe no existe lo saco
	if (!hero) {
		// return <>404 Not fount</>;
		return <Navigate to="/marvel" />;
	}

	return (
		<>
			<div className="flex justify-end">
				<button
					onClick={() => navigate(-1)}
					type="button"
					class="border opa border-gray-400 text-base rounded-lg py-2 px-10 font-bold bg-gradient-to-r from-pink-600 from-10%
                    via-indigo-500 via-30% to-violet-600 to-90% text-white hover:bg-gradient-to-r hover:from-indigo-500
                    hover:from-10% hover:via-violet-600 hover:via-30% hover:to-pink-600 hover:to-90% transition-all hover:-translate-y-1 duration-300"
				>
					Volver
				</button>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 mt-5 w-full  md:max-w-full flex-row  md:py-5 rounded-md mx-6">
				<div className="md:mt-10 animate__animated animate__fadeInLeft">
					<h3 className="text-xl font-bold mb-3 uppercase md:px-10 mt-5 bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-pink-500 animate__animated animate__fadeIn">
						{hero.superhero}
					</h3>

					<div className="space-y-5 md:p-10 text-base order-last lg:order-first w-[85%] ">
						<p>
							<strong className="text-sky-600">
								Alter ego:{" "}
							</strong>
							{hero.alter_ego}
						</p>
						<p>
							<strong className="text-sky-600">
								{" "}
								Publisher:{" "}
							</strong>
							{hero.publisher}
						</p>
						<p>
							<strong className="text-sky-600">
								{" "}
								First appearance:{" "}
							</strong>
							{hero.first_appearance}
						</p>

						<p>
							<strong className="text-sky-600">
								{" "}
								Trasfondo:{" "}
							</strong>
							{hero.trasfondo === undefined
								? "Trabajando en ello"
								: hero.trasfondo}
						</p>
						<p>
							<strong className="text-sky-600">
								{" "}
								Habilidades:{" "}
							</strong>
							{hero.habilidades}
						</p>

						<p className="text-base font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-yellow-500 to-pink-500 block ">
							Characters
						</p>
						<span className="">{hero.characters}</span>
					</div>
				</div>
				{/* Invertir imagen sm:order-first */}
				<div className="order-first lg:order-last animate__animated animate__fadeInRight">
					<img
						src={`/assets/heroes/${hero.id}.jpg`}
						alt={hero.superhero}
						className="md:h-[81%]  md:w-[85%] md:object-cover rounded shadow-sm shadow-sky-600/50 "
					/>
				</div>
			</div>
		</>
	);
};

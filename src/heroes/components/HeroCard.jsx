import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

// const chacratesByHero = ({
// 	alter_ego,
// 	characters,
// }) => {
// 	if (alter_ego === characters) return <></>;

// 	return <p>{characters}</p>;
// };

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const heroImageUrl = `/assets/heroes/${id}.jpg`;

	const chacratesByHero = <p>{characters}</p>;

	return (
		<>
			<Card className="w-full max-w-[48rem] flex-row bg-yellow-800/10 text-slate-300 animate__animated animate__fadeIn">
				<CardHeader
					shadow={false}
					floated={false}
					className="m-0 w-2/5 shrink-0 rounded-r-none"
				>
					<img
						src={heroImageUrl}
						alt={superhero}
						className="h-full w-full object-cover"
					/>
				</CardHeader>
				<CardBody>
					<Typography
						variant="h6"
						color="gray"
						className="mb-4 uppercase text-indigo-600 "
					>
						{superhero}
					</Typography>
					<Typography
						variant="h4"
						color="blue-gray"
						className="mb-2 bg-clip-text text-transparent bg-gradient-to-t from-yellow-500 to-pink-500"
					>
						{alter_ego}
					</Typography>
					<Typography
						color="gray"
						className="mb-8 font-normal text-sm"
					>
						{/* Para que los nombres no se repitan  */}
						{/* {alter_ego !== characters && (
							<p>{characters}</p>
						)} */}
						{alter_ego !== characters && chacratesByHero}

						{/* <chacratesByHero
							characters={characters}
							alter_ego={alter_ego}
						/> */}
					</Typography>
					<Typography
						color="gray"
						className="mb-8 font-normal"
					>
						<small>{first_appearance}</small>
					</Typography>

					<Link
						to={`/hero/${id}`}
						className="inline-block"
					>
						<Button
							variant="text"
							className="flex items-center gap-2 text-xs bg-slate-200 px-5 py-2 transition-all hover:-translate-y-1 duration-300 text-indigo-600"
						>
							Learn More...
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
								className="h-4 w-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
								/>
							</svg>
						</Button>
					</Link>
				</CardBody>
			</Card>
		</>
	);
};

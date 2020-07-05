import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { useHistory, useParams } from "react-router-dom";
import Header from "./Header";
import { createDogsQuery } from "./Home";
import { dogBreeds } from "../data/dogBreeds";
import CURVE from "../assets/curve.svg";

const ADD_DOG = gql`
	mutation createDogMutation(
		$name: String!
		$breed: String!
		$dogPark: String!
	) {
		createDog(name: $name, breed: $breed, dogPark: $dogPark) {
			id
			name
			breed
			dogPark
		}
	}
`;

const AddDog = () => {
	const { numDogs, dogPark } = useParams();
	const formattedDogPark = decodeURIComponent(dogPark);
	const ALL_DOGS = createDogsQuery(formattedDogPark);
	const [name, setName] = useState("");
	const [breed, setBreed] = useState("");
	const [addDog] = useMutation(ADD_DOG, {
		update(cache, { data: { createDog } }) {
			const { dogs } = cache.readQuery({ query: ALL_DOGS });
			cache.writeQuery({
				query: ALL_DOGS,
				data: { dogs: [...dogs, createDog] },
			});
		},
	});

	const history = useHistory();

	const addNewDog = async () => {
		const dogName = name || "dog";
		const dogBreed = breed || "dog";
		addDog({
			variables: {
				name: dogName,
				breed: dogBreed,
				dogPark: formattedDogPark,
			},
		})
			.then(() => {
				history.push(`/${dogPark}`);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="bg-gray-200 h-screen">
			<Header numDogs={numDogs} dogPark={formattedDogPark} />
			<div className="relative">
				<img src={CURVE} alt="smooth curve" className="absolute" />
				<div className="container px-4 mx-auto py-6 relative">
					<h2 className="fancy-underline inline-block z-10 relative text-lg mb-6 mt-2">
						Doggo Check-in:
					</h2>
					<div className="mb-4">
						<label
							className="uppercase text-dark text-xs font-extrabold"
							htmlFor="dogName"
						>
							Dog name:
						</label>
						<input
							type="text"
							id="dogName"
							onChange={(e) => setName(e.target.value)}
							placeholder="E.g. Weasley"
							className="h-12 rounded-md px-4 w-full border-dark"
						/>
					</div>
					<div className="mb-6">
						<label
							className="uppercase text-dark text-xs font-extrabold"
							htmlFor="dogName"
						>
							Dog breed:
						</label>
						<select
							onChange={(e) => setBreed(e.target.value)}
							defaultValue={breed}
							className="block w-full h-12 border-dark rounded-md px-4 custom-select"
						>
							<option disabled value="dog">
								Select a breed
							</option>
							{dogBreeds.sort().map((breed) => (
								<option
									value={breed}
									className="capitalize"
									key={breed}
								>
									{breed}
								</option>
							))}
						</select>
					</div>
					<button
						className="bg-primary block h-12 items-center justify-center rounded-md primary-btn w-full"
						onClick={addNewDog}
					>
						<h2 className="uppercase text-dark font-black">
							Add Dog
						</h2>
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddDog;

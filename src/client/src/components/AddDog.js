import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import { ALL_DOGS } from "./Home";
import { dogBreeds } from "../data/dogBreeds";

const ADD_DOG = gql`
	mutation createDogMutation($name: String!, $breed: String!) {
		createDog(name: $name, breed: $breed) {
			id
			name
			breed
		}
	}
`;

const AddDog = () => {
	const [name, setName] = useState("Dog");
	const [breed, setBreed] = useState("dog");
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

	const addNewDog = async () =>
		addDog({ variables: { name, breed } })
			.then(() => {
				history.push("/");
			})
			.catch((err) => console.log(err));

	return (
		<div>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				placeholder="Dog Name"
				defaultValue={name}
			/>
			<select
				onChange={(e) => setBreed(e.target.value)}
				defaultValue={breed}
			>
				<option disabled value="dog">
					Select a breed
				</option>
				{dogBreeds.sort().map((breed) => (
					<option value={breed} className="capitalize" key={breed}>
						{breed}
					</option>
				))}
			</select>
			<button onClick={addNewDog}>Add Dog</button>
		</div>
	);
};

export default AddDog;

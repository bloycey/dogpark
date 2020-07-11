import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

import BLOB from "../assets/blob.svg";
import { createDogsQuery } from "./Home";
import DOGHOUSE from "../assets/doghouse.png";

const REMOVE_DOG = gql`
	mutation createDogMutation($id: String!) {
		removeDog(id: $id)
	}
`;

const Dog = ({ id, name, breed, dogPark }) => {
	const [showConfirmation, setShowConfirmation] = useState(false);
	const ALL_DOGS = createDogsQuery(dogPark);
	const [removeDog] = useMutation(REMOVE_DOG, {
		update(cache, { data: { removeDog } }) {
			const { dogs } = cache.readQuery({ query: ALL_DOGS });
			cache.writeQuery({
				query: ALL_DOGS,
				data: { dogs: dogs.filter((dog) => dog.id !== removeDog) },
			});
		},
	});

	const displayConfirmation = () => setShowConfirmation(true);
	const hideConfirmation = () => setShowConfirmation(false);
	const confirmLeaving = async () => {
		await removeDog({ variables: { id } });
		hideConfirmation();
	};

	return (
		<>
			<div className="flex justify-between items-center py-2">
				<div>
					<h3 className="leading-none font-extrabold text-xl text-dark">
						{name}
					</h3>
					<h5 className="text-gray-700 -mt-1 leading-tight text-sm">
						the <span className="capitalize">{breed}</span>
					</h5>
				</div>
				<button className="relative" onClick={displayConfirmation}>
					<img
						src={BLOB}
						alt="blob button"
						className="blob-btn relative"
					/>
					<h5 className="uppercase font-black text-dark text-xs blob-btn-text">
						Leave?
					</h5>
				</button>
			</div>
			{showConfirmation && (
				<div className="overlay z-20 flex items-center justify-center">
					<div className="modal z-30 relative bg-white rounded-md">
						<div className="bg-primary px-2 py-2 text-dark font-extrabold uppercase text-sm rounded-tops">
							Just to confirm...
						</div>
						<div className="px-2 flex justify-between items-center">
							<p className="text-sm">
								Is {name} leaving the dog park?
							</p>
							<img
								src={DOGHOUSE}
								alt="Cartoon dog in doghouse"
								className="w-1/3"
							/>
						</div>
						<div className="flex justify-between px-2 pb-4 mt-2">
							<button
								className="block h-10 items-center justify-center rounded-md primary-btn w-48p"
								onClick={hideConfirmation}
							>
								<h2 className="uppercase text-dark font-black">
									No
								</h2>
							</button>
							<button
								className="bg-primary block h-10 items-center justify-center rounded-md primary-btn w-48p"
								onClick={confirmLeaving}
							>
								<h2 className="uppercase text-dark font-black">
									Yes
								</h2>
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Dog;

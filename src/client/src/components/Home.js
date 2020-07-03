import React from "react";
import { useQuery } from "react-apollo";
import { useParams } from "react-router-dom";
import gql from "graphql-tag";
import DogList from "./DogList";
import Header from "./Header";

import { Link } from "react-router-dom";

export const createDogsQuery = (dogPark) => {
	return gql`
		{
			dogs(dogPark: "${dogPark}"){
				id
				name
				breed
			}
		}
	`;
};

const NEW_DOGS_SUBSCRIPTION = gql`
	subscription {
		dogAdded {
			id
			name
			breed
		}
	}
`;

const REMOVED_DOGS_SUBSCRIPTION = gql`
	subscription {
		dogRemoved {
			id
		}
	}
`;

const subscribeToNewDogs = (subscribeToMore) => {
	subscribeToMore({
		document: NEW_DOGS_SUBSCRIPTION,
		updateQuery: (prev, { subscriptionData }) => {
			if (!subscriptionData.data) {
				return prev;
			}

			const newDog = subscriptionData.data.dogAdded;

			const newDogExists = prev.dogs.find(({ id }) => id === newDog.id);

			if (newDogExists) {
				return prev;
			}

			return { dogs: [...prev.dogs, newDog] };
		},
	});
};

const subscribeToRemovedDogs = (subscribeToMore) => {
	subscribeToMore({
		document: REMOVED_DOGS_SUBSCRIPTION,
		updateQuery: (prev, { subscriptionData }) => {
			if (!subscriptionData.data) {
				return prev;
			}

			const removedDog = subscriptionData.data.dogRemoved.id;
			const newDogExists = prev.dogs.find(({ id }) => id === removedDog);

			if (!newDogExists) {
				return prev;
			}

			return { dogs: prev.dogs.filter((dog) => dog.id !== removedDog) };
		},
	});
};

const Home = () => {
	const { dogPark } = useParams();
	const ALL_DOGS = createDogsQuery(dogPark);
	const { loading, error, data, subscribeToMore } = useQuery(ALL_DOGS);

	if (loading) {
		return "Loading";
	}
	if (error) {
		console.log("error", error);
		return "Error";
	}

	subscribeToNewDogs(subscribeToMore);
	subscribeToRemovedDogs(subscribeToMore);

	const allDogs = data.dogs;
	const numDogs = data.dogs.length;

	return (
		<div className="bg-gray-200 h-screen">
			<Header numDogs={numDogs} dogPark={dogPark} />
			<DogList dogs={allDogs} dogPark={dogPark} />
			<div className="container px-4 mx-auto pb-4">
				<Link
					to={`/add-dog/${dogPark}/${numDogs}`}
					className="bg-primary flex h-10 items-center justify-center rounded-md primary-btn"
				>
					<h2 className="uppercase text-dark font-black">
						Doggo Check In
					</h2>
				</Link>
			</div>
		</div>
	);
};

export default Home;

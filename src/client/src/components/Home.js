import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import DogList from "./DogList";
import Header from "./Header";

import { Link } from "react-router-dom";

export const ALL_DOGS = gql`
	{
		dogs {
			id
			name
			breed
		}
	}
`;

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
		<div className="bg-gray-200">
			<Header numDogs={numDogs} />
			<DogList dogs={allDogs} />
			<Link to="/add-dog">Doggo Check In</Link>
		</div>
	);
};

export default Home;

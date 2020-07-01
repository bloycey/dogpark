import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import Dog from "./Dog";

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
        }
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
        }
    });
};

const DogList = () => {
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

    return (
        <div>
            {allDogs.map((dog) => (
                <Dog
                    id={dog.id}
                    name={dog.name}
                    breed={dog.breed}
                    key={dog.id}
                />
            ))}
            <Link to="/add-dog">Doggo Check In</Link>
        </div>
    );
};

export default DogList;

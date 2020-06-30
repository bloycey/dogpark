import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Dog from "./Dog";

const ALL_DOGS = gql`
    {
        dogs {
            id
            name
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

const subscribeToNewDogs = (subscribeToMore) => {
    subscribeToMore({
        document: NEW_DOGS_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
            console.log("prev", prev);
            console.log("subscription data", subscriptionData);

            if (!subscriptionData.data) {
                return prev;
            }

            const newDog = subscriptionData.data.dogAdded;
            const exists = prev.dogs.find(({ id }) => id === newDog.id);

            if (exists) {
                return prev;
            }

            return { dogs: [...prev.dogs, newDog] };
        }
    });
};

const DogList = () => {
    return (
        <Query query={ALL_DOGS}>
            {({ loading, error, data, subscribeToMore }) => {
                if (loading) {
                    return "Loading";
                }
                if (error) {
                    console.log("error", error);
                    return "Error";
                }

                subscribeToNewDogs(subscribeToMore);
                const allDogs = data.dogs;

                return (
                    <div>
                        {allDogs.map((dog) => (
                            <Dog id={dog.id} name={dog.name} key={dog.id} />
                        ))}
                    </div>
                );
            }}
        </Query>
    );
};

export default DogList;

import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

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
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Dog Name"
            />
            <select onChange={(e) => setBreed(e.target.value)}>
                <option selected disabled value="">
                    Select a breed
                </option>
                <option value="Brittany Spaniel">Brittany Spaniel</option>
                <option value="Great Dane">Great Dane</option>
                <option value="Pug">Pug</option>
            </select>
            <Mutation mutation={ADD_DOG} variables={{ name, breed }}>
                {(dogMutation) => (
                    <button onClick={dogMutation}>Add Dog</button>
                )}
            </Mutation>
        </div>
    );
};

export default AddDog;

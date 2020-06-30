import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

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
    const [addDog] = useMutation(ADD_DOG);

    const addNewDog = () =>
        addDog({ variables: { name, breed } }).then((result) => {
            // This is a hack. TODO: Fix this up.
            window.location = "/";
        });

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
            <button onClick={addNewDog}>Add Dog</button>
        </div>
    );
};

export default AddDog;

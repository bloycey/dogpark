import React from "react";
import gql from "graphql-tag";
import { useParams, Link } from "react-router-dom";
import { useMutation } from "react-apollo";
import { useHistory } from "react-router-dom";
import { ALL_DOGS } from "./DogList";

const REMOVE_DOG = gql`
    mutation createDogMutation($id: String!) {
        removeDog(id: $id)
    }
`;

const DogSummary = () => {
    const { breed, name, id } = useParams();
    const history = useHistory();
    const [removeDog] = useMutation(REMOVE_DOG, {
        update(cache, { data: { removeDog } }) {
            const { dogs } = cache.readQuery({ query: ALL_DOGS });
            cache.writeQuery({
                query: ALL_DOGS,
                data: { dogs: dogs.filter((dog) => dog.id !== removeDog) }
            });
        }
    });

    const removeDogAndReset = async () => {
        await removeDog({ variables: { id } });
        history.push("/");
    };

    return (
        <div>
            <h2>Dog summary here</h2>
            <div>{decodeURIComponent(breed)}</div>
            <div>{decodeURIComponent(name)}</div>
            <button onClick={removeDogAndReset}>Leave the dogpark</button>
            <Link to="/">Go home</Link>
        </div>
    );
};

export default DogSummary;

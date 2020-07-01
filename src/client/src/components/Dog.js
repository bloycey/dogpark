import React from "react";
import { Link } from "react-router-dom";

const Dog = ({ id, name, breed }) => {
    return (
        <div>
            <Link
                to={`/dog/${encodeURIComponent(breed)}/${encodeURIComponent(
                    name
                )}/${id}`}
            >
                <div>
                    {name} the {breed}
                </div>
            </Link>
        </div>
    );
};

export default Dog;

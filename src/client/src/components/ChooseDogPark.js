import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { dogParks } from "../data/dogParks";

const ChooseDogPark = () => {
	const history = useHistory();
	const [dogParkName, setDogParkName] = useState();

	const changeDogPark = (e) => {
		setDogParkName(e.target.value);
		const newUrl = encodeURIComponent(e.target.value);
		history.push(`/${newUrl}`);
	};

	return (
		<div>
			<select
				name="dogParks"
				id="dogPark"
				value={dogParkName}
				className="text-dark"
				onChange={changeDogPark}
			>
				<option value="" selected disabled>
					Please Select a Dog Park
				</option>
				{dogParks.map((dogPark) => {
					return (
						<option value={dogPark} key={dogPark}>
							{dogPark}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default ChooseDogPark;

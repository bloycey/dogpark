import React from "react";
import Dog from "./Dog";
import DOGGO from "../assets/doggo.png";
import CURVE from "../assets/curve.svg";

const DogList = ({ dogs }) => {
	return (
		<div className="relative">
			<img src={CURVE} alt="smooth curve" className="absolute" />
			<div className="container px-4 mx-auto py-6 relative">
				<h2 className="fancy-underline inline-block z-10 relative text-lg mb-6 mt-2">
					Meet the dogs:
				</h2>
				<img src={DOGGO} alt="Dog Cartoon" className="doggo" />
				{dogs.map((dog) => (
					<Dog
						id={dog.id}
						name={dog.name}
						breed={dog.breed}
						key={dog.id}
					/>
				))}
			</div>
		</div>
	);
};

export default DogList;

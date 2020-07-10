import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { dogParks } from "../data/dogParks";
import BORK from "../assets/bork2.png";

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
			<div className="bg-dark choose-dog-park">
				<div className="container px-4 py-8 mx-auto text-white relative">
					<p className="leading-none font-extrabold text-2xl lg:text-4xl">
						Who's at the dog park?
					</p>
					<p className="opacity-50 leading-tight lg:text-xl">
						A tool for Brisbane dog lovers
					</p>
					<img src={BORK} alt="BORK sound" className="bork" />
				</div>
			</div>
			<div className="container px-4 mx-auto">
				<h2 className="fancy-underline inline-block z-10 relative text-lg mb-6 mt-6">
					Start by selecting your dog park:
				</h2>
				<select
					name="dogParks"
					id="dogPark"
					value={dogParkName}
					className="block w-full h-12 border-dark rounded-md px-4 custom-select"
					onChange={changeDogPark}
					defaultValue=""
				>
					<option value="" disabled>
						Please Select a Dog Park
					</option>
					{dogParks.sort().map((dogPark) => {
						return (
							<option value={dogPark} key={dogPark}>
								{dogPark}
							</option>
						);
					})}
				</select>
				<h2 className="fancy-underline inline-block z-10 relative text-lg mb-6 mt-6">
					Use this app to:
				</h2>
				<ul className="list-disc list-inside">
					<li>Check your dog into the dog park;</li>
					<li>View dogs currently at the dog park;</li>
					<li>Determine how busy a dog park is.</li>
				</ul>
			</div>
		</div>
	);
};

export default ChooseDogPark;

import React from "react";
import BORK from "../assets/bork2.png";

const Header = ({ numDogs, dogPark }) => {
	const numberOfDogs = parseInt(numDogs);
	return (
		<div className="bg-dark main-header">
			<div className="container px-4 py-6 mx-auto text-white relative">
				<p className="leading-none">
					There <span>{numberOfDogs === 1 ? "is " : "are "}</span>{" "}
					currently
				</p>
				<p className="font-black uppercase text-6xl leading-none">
					{numberOfDogs} dog{numberOfDogs === 1 ? "" : "s"}
				</p>
				<p className="text-right leading-none ">at {dogPark}</p>
				<img src={BORK} alt="BORK sound" className="bork" />
			</div>
		</div>
	);
};

export default Header;

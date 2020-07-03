import React from "react";
import BORK from "../assets/bork2.png";

const Header = ({ numDogs }) => (
	<div className="bg-dark">
		<div className="container px-4 py-6 mx-auto text-white relative">
			<p className="leading-none">
				There <span>{numDogs === 1 ? "is " : "are "}</span> currently
			</p>
			<p className="font-black uppercase text-6xl leading-none">
				{numDogs} dog{numDogs === 1 ? "" : "s"}
			</p>
			<p className="text-right leading-none">at oxley dog park.</p>
			<img src={BORK} alt="BORK sound" className="bork" />
		</div>
	</div>
);

export default Header;

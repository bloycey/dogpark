import React from "react";
import BLOB from "../assets/blob.svg";

const Dog = ({ id, name, breed }) => {
	return (
		<div className="flex justify-between items-center py-2">
			<div>
				<h3 className="leading-none font-extrabold text-2xl text-dark">
					{name}
				</h3>
				<h5 className="text-gray-700 text-lg -mt-1">
					the <span className="capitalize">{breed}</span>
				</h5>
			</div>
			<button className="relative">
				<img
					src={BLOB}
					alt="blob button"
					className="blob-btn relative"
				/>
				<h5 className="uppercase font-black text-dark text-xs blob-btn-text">
					Leave?
				</h5>
			</button>
		</div>
	);
};

export default Dog;

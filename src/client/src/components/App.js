import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddDog from "./AddDog";
import ChooseDogPark from "./ChooseDogPark";
import Home from "./Home";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/choose-dog-park">
					<ChooseDogPark />
				</Route>
				<Route path="/add-dog/:dogPark/:numDogs">
					<AddDog />
				</Route>
				<Route path="/:dogPark">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

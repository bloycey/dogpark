import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddDog from "./AddDog";
import Home from "./Home";
import DogSummary from "./DogSummary";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path="/add-dog">
					<AddDog />
				</Route>
				<Route path="/dog/:breed/:name/:id">
					<DogSummary />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

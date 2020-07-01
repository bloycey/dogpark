import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AddDog from "./AddDog";
import DogList from "./DogList";
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
                    <DogList />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddDog from "./AddDog";
import DogList from "./DogList";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/add-dog">
                    <AddDog />
                </Route>
                <Route path="/">
                    <DogList />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

import "./styles.css";

const httpLink = createHttpLink({
	uri: `${process.env.REACT_APP_APP_URL}/graphql`,
});

const wsLink = new WebSocketLink({
	uri: `${process.env.REACT_APP_WEBSOCKETS_URL}/graphql`,
	options: {
		reconnect: true,
	},
});

const link = split(
	({ query }) => {
		const { kind, operation } = getMainDefinition(query);
		return kind === "OperationDefinition" && operation === "subscription";
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
serviceWorker.unregister();

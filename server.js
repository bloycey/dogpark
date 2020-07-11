const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const path = require("path");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
require("dotenv").config();
// const { db } = require("./credentials");

const startServer = async () => {
	const db = process.env.DB;

	const app = express();

	app.use(cors());
	app.use(express.static("public"));

	// Handle React routing, return all requests to React app
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "public", "index.html"));
	});

	const server = new ApolloServer({ typeDefs, resolvers });

	server.applyMiddleware({ app });
	const httpServer = http.createServer(app);
	server.installSubscriptionHandlers(httpServer);

	await mongoose
		.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.catch((err) => console.log("mongo error", err));

	httpServer.listen({ port: 4001 }, () => {
		console.log(
			`🚀 Server ready at http://localhost:4001${server.graphqlPath}`
		);
		console.log(
			`🚀 Supscriptions ready at ws://localhost:4001${server.subscriptionsPath}`
		);
	});
};

startServer();

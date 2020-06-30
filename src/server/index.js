import express from "express";
import mongoose from "mongoose";
import http from "http";
import { ApolloServer } from "apollo-server-express";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { db } from "./credentials";

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    server.applyMiddleware({ app });
    const httpServer = http.createServer(app);
    server.installSubscriptionHandlers(httpServer);

    await mongoose
        .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
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

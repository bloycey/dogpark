import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String!
        dogs: [Dog!]!
    }

    type id {
        id: String!
    }

    type Dog {
        id: ID!
        name: String!
        breed: String!
    }

    type Mutation {
        createDog(name: String!, breed: String!): Dog!
        removeDog(id: String!): String!
    }

    type Subscription {
        dogAdded: Dog!
        dogRemoved: id!
    }
`;

export default typeDefs;

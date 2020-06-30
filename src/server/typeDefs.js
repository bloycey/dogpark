import { gql } from "apollo-server-express";

const typeDefs = gql`
    type Query {
        hello: String!
        dogs: [Dog!]!
    }

    type Dog {
        id: ID!
        name: String!
        breed: String!
    }

    type Mutation {
        createDog(name: String!, breed: String!): Dog!
        removeDog(id: String!): Boolean!
    }

    type Subscription {
        dogAdded: Dog!
    }
`;

export default typeDefs;

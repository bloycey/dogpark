const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Query {
		hello: String!
		dogs(dogPark: String!): [Dog!]!
	}

	type id {
		id: String!
	}

	type Dog {
		id: ID!
		name: String!
		breed: String!
		dogPark: String!
	}

	type Mutation {
		createDog(name: String!, breed: String!, dogPark: String!): Dog!
		removeDog(id: String!): String!
	}

	type Subscription {
		dogAdded: Dog!
		dogRemoved: id!
	}
`;

module.exports.typeDefs = typeDefs;

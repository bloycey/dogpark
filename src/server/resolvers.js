const { Dog } = require("./models/Dog");
const { PubSub } = require("apollo-server-express");
const { uuid } = require("uuidv4");

const pubsub = new PubSub();
pubsub.ee.setMaxListeners(30);

const resolvers = {
	Subscription: {
		dogAdded: {
			subscribe: () => pubsub.asyncIterator("DogAdded"),
		},
		dogRemoved: {
			subscribe: () => pubsub.asyncIterator("DogRemoved"),
		},
	},
	Query: {
		dogs: (_, { dogPark }) => Dog.find({ dogPark: dogPark }),
	},
	Mutation: {
		createDog: async (_, { name, breed, dogPark }) => {
			const identifier = uuid();
			const doggo = new Dog({ name, id: identifier, breed, dogPark });
			await doggo.save().then(() => console.log("woof"));
			pubsub.publish("DogAdded", {
				dogAdded: { name, id: identifier, breed, dogPark },
			});
			return doggo;
		},
		removeDog: async (_, { id }) => {
			await Dog.deleteOne({ id });
			pubsub.publish("DogRemoved", {
				dogRemoved: { id },
			});
			return id;
		},
	},
};

module.exports.resolvers = resolvers;

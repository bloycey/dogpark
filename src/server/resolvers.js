import Dog from "./models/Dog";
import { PubSub } from "apollo-server-express";
import { uuid } from "uuidv4";

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
		dogs: () => Dog.find(),
	},
	Mutation: {
		createDog: async (_, { name, breed }) => {
			const identifier = uuid();
			const doggo = new Dog({ name, id: identifier, breed });
			await doggo.save().then(() => console.log("woof"));
			pubsub.publish("DogAdded", {
				dogAdded: { name, id: identifier, breed },
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

export default resolvers;

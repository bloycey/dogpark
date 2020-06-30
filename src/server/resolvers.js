import Dog from "./models/Dog";
import { PubSub } from "apollo-server-express";

const pubsub = new PubSub();

const resolvers = {
    Subscription: {
        dogAdded: {
            subscribe: () => pubsub.asyncIterator("DogAdded")
        }
    },
    Query: {
        hello: () => "Hello world",
        dogs: () => Dog.find()
    },
    Mutation: {
        createDog: async (_, { name, breed }) => {
            const currentTime = new Date().getTime();
            const doggo = new Dog({ name, id: currentTime, breed });
            await doggo.save().then(() => console.log("woof"));
            pubsub.publish("DogAdded", {
                dogAdded: { name, id: currentTime, breed }
            });
            return doggo;
        },
        removeDog: async (_, { id }) => {
            const deletedDog = await Dog.deleteOne({ id });
            return !!deletedDog.deletedCount;
        }
    }
};

export default resolvers;

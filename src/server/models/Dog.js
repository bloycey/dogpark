import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dogSchema = new Schema({
	name: String,
	id: String,
	breed: String,
	dogPark: String,
});

export const Dog = mongoose.model("Dog", dogSchema);

// export const dogParkSchema = new Schema([dogSchema]);

// export const DogPark = mongoose.model("DogPark", dogParkSchema);

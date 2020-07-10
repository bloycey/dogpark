const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema({
	name: String,
	id: String,
	breed: String,
	dogPark: String,
});

const Dog = mongoose.model("Dog", dogSchema);
module.exports.Dog = Dog;

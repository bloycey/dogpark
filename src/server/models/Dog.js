import mongoose from "mongoose";

const Dog = mongoose.model("Dog", { name: String, id: Number, breed: String });

export default Dog;

import mongoose from "mongoose";

const Dog = mongoose.model("Dog", { name: String, id: String, breed: String });

export default Dog;

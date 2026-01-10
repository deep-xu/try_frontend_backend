import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  type: String
});

export default mongoose.model("Book", bookSchema);

// This is a model file that defines the structure of our data. It includes a schema that defines the fields and their types, and a model that creates a collection in the database based on that schema. We can import this model in other files to interact with the database.
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  quantity: { type: Number, required: true, min: 1 },
});

const Item = mongoose.model("Item", itemSchema);

export default Item;

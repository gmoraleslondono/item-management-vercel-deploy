import Item from "../models/itemModel.js";

// `GET` to read all items from the database.
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// filter items by name
export const getItemByName = async (req, res) => {
  try {
    // const { name } = req.query;
    // const items = await Item.find({ name });
    const filteredItems = await Item.find({ name: "Banana" });
    res.json(filteredItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// filter items by quantity greater than 5
export const getItemByQuantity = async (req, res) => {
  try {
    const filteredItems = await Item.find({ quantity: { $gt: 5 } }); // greater than 5
    res.json(filteredItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// sort items by name
export const getSortedItems = async (req, res) => {
  try {
    const sortedItems = await Item.find().sort({ name: 1 }); //in ascending order
    res.json(sortedItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// count the number of items in each category in the database
export const getGroupedItems = async (req, res) => {
  try {
    const groupedItems = await Item.aggregate([
      {
        $group: {
          _id: "$name",
          totalQuantity: { $sum: "$quantity" },
        },
      },
    ]);
    res.json(groupedItems);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// count all items in the database
export const getItemsCount = async (req, res) => {
  try {
    const count = await Item.countDocuments();
    res.json({ totalItems: count });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// `POST` to add a new item to the database.
export const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// patch a quantity item by its ID
export const patchItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Item.updateOne(
      { _id: id },
      { $set: { quantity: 20 } }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// `PUT` to update an existing item by its ID.
export const updateItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedItem = await Item.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!updatedItem) {
      res.status(404).send("Item not found");
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

//`DELETE` to remove an item by its ID.
export const deleteItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).send("Item not found");
    }
    res.json({ message: "Item deleted successfully", item: deletedItem });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Delete many items
export const deleteManyItems = async (req, res) => {
  try {
    const deletedItems = await Item.deleteMany({ quantity: { $lt: 5 } });
    res.json({ message: "Items deleted successfully", items: deletedItems });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting items" });
  }
};

import express from "express";

import {
  getAllItems,
  getItemByName,
  getItemByQuantity,
  getSortedItems,
  getGroupedItems,
  getItemsCount,
  createItem,
  patchItemById,
  updateItemById,
  deleteItemById,
  deleteManyItems,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/items", getAllItems);
router.get("/items/name", getItemByName);
router.get("/items/quantity", getItemByQuantity);
router.get("/items/sorted", getSortedItems);
router.get("/items/grouped", getGroupedItems);
router.get("/items/count", getItemsCount);
router.post("/items", createItem);
router.patch("/items/:id", patchItemById);
router.put("/items/:id", updateItemById);
router.delete("/items/:id", deleteItemById);
router.delete("/items/deleteMany", deleteManyItems);

export default router;

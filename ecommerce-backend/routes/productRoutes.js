import express from "express";
import { getProducts, getProductById } from "../controllers/productController.js";
import { isAdmin, protect } from "../middleware/auth.js";
import Product from "../models/Product.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/", protect, isAdmin, async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: "Create failed", error: err });
  }
});

// UPDATE
router.put("/:id", protect, isAdmin, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: "Update failed" });
  }
});

// DELETE
router.delete("/:id", protect, isAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ message: "Delete failed" });
  }
});

export default router;

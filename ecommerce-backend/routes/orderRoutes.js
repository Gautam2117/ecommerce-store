import express from "express";
import { placeOrder, getUserOrders, getAllOrders } from "../controllers/orderController.js";
import { isAdmin, protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/", protect, placeOrder);
router.get("/my", protect, getUserOrders);
router.get("/all", protect, isAdmin, getAllOrders);

export default router;

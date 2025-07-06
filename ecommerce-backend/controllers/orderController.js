import Order from "../models/Order.js";

export const placeOrder = async (req, res) => {
  const { items, total } = req.body;
  if (!items || items.length === 0) return res.status(400).json({ message: "No items" });

  const order = await Order.create({
    userId: req.user.id,
    items,
    total,
  });

  res.status(201).json(order);
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email").sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

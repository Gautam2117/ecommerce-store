// seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB();

const sampleProducts = [
  {
    name: "Classic White T-Shirt",
    price: 599,
    category: "Clothing",
    brand: "UrbanWear",
    image: "https://via.placeholder.com/300",
    description: "Comfortable 100% cotton T-shirt",
    countInStock: 25,
  },
  {
    name: "Noise Smartwatch",
    price: 2499,
    category: "Electronics",
    brand: "Noise",
    image: "https://via.placeholder.com/300",
    description: "Fitness & notification tracking watch",
    countInStock: 10,
  },
  {
    name: "Leather Wallet",
    price: 999,
    category: "Accessories",
    brand: "Fossil",
    image: "https://via.placeholder.com/300",
    description: "Premium leather wallet with card slots",
    countInStock: 30,
  },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("✅ Sample products added!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedProducts();

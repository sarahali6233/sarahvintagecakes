const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create a new order
router.post("/", async (req, res) => {
  const { name, email, phone, size, flavor, tiers, decor, colors } = req.body;
  try {
    const newOrder = new Order({
      name,
      email,
      phone,
      size,
      flavor,
      tiers,
      decor,
      colors,
    });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

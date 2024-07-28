const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  size: { type: String, required: true },
  flavor: { type: String, required: true },
  tiers: { type: Number, required: true },
  decor: { type: String, required: true },
  colors: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);

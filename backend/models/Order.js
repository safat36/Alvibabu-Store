const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [{ id: Number, name: String, price: Number, qty: Number }],
  total: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);

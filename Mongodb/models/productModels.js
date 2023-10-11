// models/Product.js
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter the product name"]},
    description: { type: String, required: [true, "Please enter the product description"] },
    price: { type: Number, required: true, default: 0.0 },
    published: { type: Boolean, default: false },
    category: { type: String, enum: ['Men', 'Women', 'Teens'], required: true },
  },
  {
    timestamps: true
  });

const product = mongoose.model('products', productSchema);

module.exports = product;
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:  true,
        minlength: 3
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    category: {
        type: String,
        required: true,
        enum: ['Fashion', 'Shoe', 'Books']
    },
    stock: {
        type: Number,
        min: 0,
        default: 1
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


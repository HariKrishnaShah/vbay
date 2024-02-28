const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        enum: ['New', 'Used'],
        required: true
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Assuming there's a User model
        required: true
    },
    images: [{
        type: String // Array of image URLs
    }],
    location: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Ad = mongoose.model('ad', adSchema);
Ad.createIndexes();
module.exports = Ad;
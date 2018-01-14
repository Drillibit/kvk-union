const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: String,
    price: Number,
    size: String,
    contentType: String,
    description: String,
    image: Buffer
});

mongoose.model('items', itemSchema);
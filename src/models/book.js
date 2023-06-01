const { Schema, model } = require('mongoose');



const bookSchema = new Schema({

    title: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
    },
    publishedYear: {
        type: Number,
    }

}, { timestamps: true, vertionkey: false })


const book = model('book', bookSchema);

module.exports = { book };
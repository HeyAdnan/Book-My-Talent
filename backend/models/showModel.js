const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title : String,
    artist: String,
    category : String,
    capacity : Number,
    price : Number,
    image: String,
    createdAt : Date,
    showdate : Date
});

module.exports = model( 'show', mySchema );
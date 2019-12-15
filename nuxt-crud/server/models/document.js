const { Schema, model } = require('mongoose');

const schema = new Schema({
    title: String,
    content: String,
    tags: String,
    date: Date
},{versionKey: false})

module.exports = model('Document', schema)
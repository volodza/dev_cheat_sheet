const {Schema,model} = require('mongoose');

const schema = new Schema({
  title:String,
  content:String,
  date:Date
})

module.exports = model('Document',schema)
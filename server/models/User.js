const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}, 
  image: {type: String},
  bio: {type: String}
})

module.exports = mongoose.model('User', userSchema)
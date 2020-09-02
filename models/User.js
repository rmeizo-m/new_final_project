const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  name: {type: String, required: true},
  telegram:{type: String, required: true},
  github:{type: String, required: true},
  email: {type: String, required:true, unique: true},
  password: {type: String, required: true},
  avatar: {type: Boolean, required: false},
  img: {type: String, required: true}
});

module.exports = model('user', schema); 
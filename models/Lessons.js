const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  name : {type: String},
  menter: {type:String},
  zoom: {type:String},
  material: {type: String},
  date : {type: Date, default: Date.now},
  video : {type: String}
});

module.exports = model('lessons', schema); 
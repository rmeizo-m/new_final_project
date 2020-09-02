const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  lectureNumber:{type: Number},
  title: {type: String},
  section: {type:String},
  description: {type:String},
  mentor: {type: String},
  url : {type: String},
  task: {type:String},
  send: {type: String}
});

module.exports = model('lessons', schema); 
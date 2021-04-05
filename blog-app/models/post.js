const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, 'A post must have a title'],
    //DO NOT ACCEPT SIMBOLES
    validate: [validator.isAlpha, "title can't accept symbols"],
  },
  body: {
    type: String,
    require,
    //LIMIT length to 20
    maxlength: 20,
  },
  author: {
    type: String,
    //ONLY accept alpha [a-z|A-Z]
    validate: validator.isAlpha,
  },
  date: {
    type: String,
  },
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;

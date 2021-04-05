const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  //Comments on postes
  comment: {
    String,
  },
  //Referencing to the Post
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'comment must belong to a Post'],
  },
});

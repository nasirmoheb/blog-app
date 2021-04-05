const express = require('express');
const commentController = require('./../controllers/commentController');

const router = express.Router();

// Comment route
router
  .route('/')
  .get(commentController.getAllComment)
  .post(commentController.createComment);

router
  .route('/:id')
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = router;

const { body } = require('express-validator');

module.exports = {
  postDiscussion: [
    body('question').isString().notEmpty().withMessage('Question is required'),
    body('repository')
      .isString()
      .withMessage('Repository ID should be a string'),
  ],
  postReportDiscussionComment: [
    body('reason').isString().notEmpty().withMessage('Reason is required'),
  ],
  postComment: [
    body('comment').isString().notEmpty().withMessage('Comment is required'),
    body('discussionId')
      .isMongoId()
      .notEmpty()
      .withMessage('discussionId is required'),
  ],
};

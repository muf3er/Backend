const express = require('express');

const router = express.Router();

const authenticator = require('../../middlewares/auth');
const controller = require('../../controllers/v1/discussion');

router.get('/', authenticator(), controller.getDiscussions);
router.get('/:id', authenticator(), controller.getDiscussionById);
router.post('/', authenticator(), controller.postDiscussion);
router.post('/comment', authenticator(), controller.postComment);

module.exports = router;
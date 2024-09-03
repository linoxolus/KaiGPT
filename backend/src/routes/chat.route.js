const router = require('express').Router();
const chatController = require('../controllers/chat.controller');

router.get('/', chatController.index);
router.get('/ask', chatController.ask);
router.get('/askStream', chatController.askStream);

module.exports = router;
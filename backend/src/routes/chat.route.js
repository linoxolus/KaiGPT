const router = require('express').Router();
const chatController = require('../controllers/chat.controller');

router.get('/', chatController.index);
router.get('/ask', chatController.ask);

module.exports = router;
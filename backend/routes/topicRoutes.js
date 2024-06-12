const express = require('express');
const { subscribe, notify, unsubscribe, getTopics } = require('../controllers/topicController');

const router = express.Router();

router.post('/subscribe', subscribe);
router.get('/notify/:topicId', notify);
router.post('/unsubscribe', unsubscribe);
router.get('/getTopics', getTopics); 
module.exports = router;

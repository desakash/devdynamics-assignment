const Topic = require('../models/Topic');

exports.subscribe = (req, res) => {
  const { topicId, subscriberId } = req.body;
  console.log(subscriberId);
  Topic.subscribe(topicId, subscriberId);
  res.status(200).json({ message: 'Subscribed successfully' });
};

exports.notify = (req, res) => {
  const { topicId } = req.params;
  const subscribers = Topic.notify(topicId);
  res.status(200).json({ subscribers });
};

exports.unsubscribe = (req, res) => {
  const { topicId, subscriberId } = req.body;
  Topic.unsubscribe(topicId, subscriberId);
  res.status(200).json({ message: 'Unsubscribed successfully' });
};
exports.getTopics = (req, res) => {
  const topics = Topic.getAllTopics();
  res.status(200).json({ topics });
};

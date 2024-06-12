class Topic {
    constructor() {
      this.topics = {};
    }
  
    subscribe(topicId, subscriberId) {
      console.log(`Subscribing: Topic ID - ${topicId}, Subscriber ID - ${subscriberId}`);
      if (!this.topics[topicId]) {
        this.topics[topicId] = new Set();
        console.log(`New topic created: ${topicId}`);
      }
      this.topics[topicId].add(subscriberId);
      console.log(`Current subscribers for topic ${topicId}:`, Array.from(this.topics[topicId]));
    }
  
    notify(topicId) {
      return this.topics[topicId] ? Array.from(this.topics[topicId]) : [];
    }
  
    unsubscribe(topicId, subscriberId) {
      if (this.topics[topicId]) {
        this.topics[topicId].delete(subscriberId);
        if (this.topics[topicId].size === 0) {
          delete this.topics[topicId];
        }
      }
    }
    getAllTopics() {
      const topics = {};
      for (const [topicId, subscribers] of Object.entries(this.topics)) {
        topics[topicId] = Array.from(subscribers);
      }
      return topics;
    }
  }
  
  module.exports = new Topic();
  
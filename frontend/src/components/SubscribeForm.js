import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function SubscribeForm() {
  const [topicId, setTopicId] = useState('');
  const [subscriberId, setSubscriberId] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/topics/subscribe', { topicId, subscriberId });
      if (response.status === 200) {
        alert('Subscribed successfully!');
      }
    } catch (error) {
      console.error('There was an error subscribing!', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Subscribe to a Topic
      </Typography>
      <TextField
        label="Topic ID"
        value={topicId}
        onChange={(e) => setTopicId(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <TextField
        label="Subscriber ID"
        value={subscriberId}
        onChange={(e) => setSubscriberId(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubscribe}>
          Subscribe
        </Button>
      </Box>
    </Paper>
  );
}

export default SubscribeForm;

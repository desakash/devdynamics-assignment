import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function UnsubscribeForm() {
  const [topicId, setTopicId] = useState('');
  const [subscriberId, setSubscriberId] = useState('');

  const handleUnsubscribe = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/topics/unsubscribe', { topicId, subscriberId });
      if (response.status === 200) {
        alert('Unsubscribed successfully!');
      }
    } catch (error) {
      console.error('There was an error unsubscribing!', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Unsubscribe from a Topic
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
        <Button variant="contained" color="primary" onClick={handleUnsubscribe}>
          Unsubscribe
        </Button>
      </Box>
    </Paper>
  );
}

export default UnsubscribeForm;

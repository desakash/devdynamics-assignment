import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';

function NotifyForm() {
  const [topicId, setTopicId] = useState('');

  const handleNotify = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/topics/notify/${topicId}`);
      if (response.status === 200) {
        alert(`Notified ${response.data.subscribers.length} subscriber(s)!`);
      }
    } catch (error) {
      console.error('There was an error notifying!', error);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Notify Subscribers of a Topic
      </Typography>
      <TextField
        label="Topic ID"
        value={topicId}
        onChange={(e) => setTopicId(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleNotify}>
          Notify
        </Button>
      </Box>
    </Paper>
  );
}

export default NotifyForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function TopicList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/topics/getTopics');
        console.log('Fetched topics:', response.data);
        setTopics(Object.entries(response.data.topics));
      } catch (error) {
        console.error('There was an error fetching the topics!', error);
      }
    };

    fetchTopics();
  }, []);

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Subscribed Topics
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Topic ID</TableCell>
              <TableCell>Subscribers</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topics.map(([topic, subscribers]) => (
              <TableRow key={topic}>
                <TableCell>{topic}</TableCell>
                <TableCell>
                  <ul>
                    {subscribers.map(subscriber => (
                      <li key={subscriber}>{subscriber}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TopicList;

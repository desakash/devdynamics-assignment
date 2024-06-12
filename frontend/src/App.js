import React from 'react';
import { Container, AppBar, Tabs, Tab, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Import useTheme hook
import SubscribeForm from './components/SubscribeForm';
import UnsubscribeForm from './components/UnsubscribeForm';
import NotifyForm from './components/NotifyForm';
import TopicList from './components/TopicList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme(); // Access theme object

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static" sx={{ borderBottom: '1px solid #ccc' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="navigation tabs"
          indicatorColor="primary"
        >
          <Tab 
            label="Subscribe" 
            {...a11yProps(0)} 
            sx={value === 0 ? { backgroundColor: 'white' } : {}} // Highlight the current tab
          />
          <Tab 
            label="Unsubscribe" 
            {...a11yProps(1)} 
            sx={value === 1 ? { backgroundColor:'white' } : {}} // Highlight the current tab
          />
          <Tab 
            label="Notify" 
            {...a11yProps(2)} 
            sx={value === 2 ? { backgroundColor: 'white' } : {}} // Highlight the current tab
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SubscribeForm />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UnsubscribeForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NotifyForm />
      </TabPanel>
      <TopicList />
    </Container>
  );
}

export default App;

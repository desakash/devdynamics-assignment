# Publisher Subscriber Notification System

## Overview

This is a Publisher Subscriber Notification System implemented using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to subscribe to topics, unsubscribe from topics, and notify subscribers of a particular topic. The application includes a backend API for managing topics and subscribers, as well as a frontend UI for user interaction.

## Implementation Overview

### Backend
- The backend is built using Node.js and Express.js.
- It provides RESTful API endpoints for subscribing, unsubscribing, notifying, and retrieving topics.
- The backend uses a Topic class to manage topic subscriptions internally without relying on an external database.
- API routes are defined in the `topicRoutes.js` file, and their corresponding logic is implemented in the `topicController.js` file.

### Frontend
- The frontend is built using React.js.
- It provides a user interface for subscribing, unsubscribing, notifying, and displaying topics.
- Material-UI components are used for styling and layout.
- The UI consists of three tabs: Subscribe, Unsubscribe, and Notify, each containing forms for respective actions.

### API Endpoints

1. **Subscribe**
   - URL: `/api/topics/subscribe`
   - Method: POST
   - Description: Allows a subscriber to subscribe to a topic.
   - Request Body: 
     ```
     {
       "topicId": "string",
       "subscriberId": "string"
     }
     ```
   - Response: 
     - Status Code: 200 OK

2. **Unsubscribe**
   - URL: `/api/topics/unsubscribe`
   - Method: POST
   - Description: Allows a subscriber to unsubscribe from a topic.
   - Request Body: 
     ```
     {
       "topicId": "string",
       "subscriberId": "string"
     }
     ```
   - Response: 
     - Status Code: 200 OK

3. **Notify**
   - URL: `/api/topics/notify/:topicId`
   - Method: GET
   - Description: Sends notifications to all subscribers of a particular topic.
   - Path Parameter: `topicId` (string)
   - Response: 
     - Status Code: 200 OK
     - Response Body: 
       ```
       {
         "subscribers": ["subscriber1", "subscriber2", ...]
       }
       ```

4. **Get Topics**
   - URL: `/api/topics`
   - Method: GET
   - Description: Retrieves all topics and their subscribers.
   - Response: 
     - Status Code: 200 OK
     - Response Body: 
       ```
       {
         "topics": {
           "topic1": ["subscriber1", "subscriber2", ...],
           "topic2": ["subscriber3", "subscriber4", ...],
           ...
         }
       }
       ```

## Installation and Setup

1. **Clone Repository**

2. **Install Dependencies**

3. **Run Backend Server**

4. **Run Frontend Server**

5. **Access Application**
The application is hosted on Vercel. You can access it using the following link:
[Publisher Subscriber Notification System](https://devdynamics-assignment.vercel.app/)

## Author
Akash Deshmukh

## License
This project is licensed under the [MIT License](LICENSE).

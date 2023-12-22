// Create web server
// 1. Create express application object
const express = require('express');
const app = express();

// 2. Create a route handler for GET requests to '/'
// 3. Send back a response of 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 4. Have the application listen on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
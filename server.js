const express = require('express');
const path = require('path');
const app = express();

// 1. Explicitly serve the admin folder first (bypasses React entirely)
app.use('/admin', express.static(path.join(__dirname, 'build', 'admin')));

// 2. Serve the rest of the React app's static files (JS, CSS, images)
app.use(express.static(path.join(__dirname, 'build')));

// 3. Catch-all for React Router (sends all other traffic to React)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000, () => {
  console.log('Express server running on port 3000');
});
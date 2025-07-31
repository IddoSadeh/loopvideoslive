// server.js
const express = require('express');
const path    = require('path');
const app     = express();

// serve everything in this folder as static files
app.use(express.static(path.join(__dirname)));

app.get('/time', (_req, res) => {
  // return the server clock in milliseconds
  res.json({ ts: Date.now() });
});

// server.js
app.listen(3000, () => console.log('time-server on 3000'));

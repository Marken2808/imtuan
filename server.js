require('dotenv').config();

const express = require("express");
const port = process.env.PORT || 5000;

const app = express();
const http = require('http');
const server = http.createServer(app);

const path = require('path');

server.listen(port, () => { console.log('Listening on port ' + port) });
app.use(express.json({ limit: '1mb' }));

// Define root
const root = path.join(__dirname, 'dist');

// check if the app is running in production
if (process.env.NODE_ENV === 'production') {
  // use the static files
  app.use(express.static(root));

// otherwise
} else {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
}

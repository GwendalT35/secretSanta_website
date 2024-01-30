const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const port = 4444;

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});

app.use('/', express.static('public'));




const path = require('path');
const express = require('express');
const app = express();

let port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// app.use(express.static(path.join(__dirname, '/public/index.html'))); 
app.listen(port, () => {
  console.log('Listening on port: ', port);
});
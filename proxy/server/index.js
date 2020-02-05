const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const port = process.env.PORT || 1000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/comments', (req, res) => {
  axios.get('http://localhost:3001/api/comments')
    .then(response => {
      res.send(response.data);
    });
});

app.get('/songs', (req, res) => {
  axios.get('http://localhost:9000/songs')
    .then(response => {
      res.send(response.data);
    });
});

app.get('/4e6f865c81aa54f9e778e35e7ac3ed73.mp3', (req, res) => {
  axios.get('http://localhost:9000/4e6f865c81aa54f9e778e35e7ac3ed73.mp3')
    .then(response => {
      res.send(response.data);
    });
});


app.listen(port, () => { console.log(`Listening on port ${port}`) });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

const logs = [];

app.get('/', function (req, res) {
  res.json(logs);
});

app.post('/ci', function (req, res) {
  console.log(req);
  logs.push(req);
  res.json();
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

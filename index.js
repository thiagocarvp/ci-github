const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000; 

const logs = [];

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json(logs);
});

app.post('/ci', function (req, res) {
  console.log(req.body);
  logs.push(req.body);
  res.json();
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

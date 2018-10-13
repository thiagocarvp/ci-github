const express = require('express');
const app = express();
const port = process.env.PORT || 3000; 

app.post('/ci', function (req, res) {
  console.log(req);
  res.json();
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});

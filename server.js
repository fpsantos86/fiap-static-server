const express = require('express');
const path = require('path');
const app = express();


const directory = path.join(__dirname, 'public');

app.use(express.static(directory));

app.get('/healthcheck', (req, res) => {res.send('OK')});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
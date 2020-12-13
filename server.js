const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const api = require('./routes');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

//serve index.html
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
});

//routes.js call
app.use('/', api);

//enable view engine (pug)
app.set('view engine', 'pug');

//boot up the server boi
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

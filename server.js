const http = require('http');
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const api = require('./routes');

const app = express();

app.use(cors());

//frontend file declaration
app.use(express.static('public'));

//routes.js call
app.use('/', api);

//enable view engine (pug)
app.set('view engine', 'pug');

//boot up the server boi
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

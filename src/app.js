'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();

require('./database');
require('./seed');

var router = require('./api');

app.use('/', express.static('public'));
app.use(parser.json());

app.use('/api', router);

app.listen(3000, function() {
  console.log("Hello I am alive on port 3000 thank you, BooP!.");
});

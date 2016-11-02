'use strict';

var express = require('express');

var router = express.Router();

var todos = require('../../mock/todos.json')

router.get('/todos', function(req, res) {
  res.json(todos);
});

// TODO: Add PUT route.

// TODO: Add POST route.

// TODO: Add DELETE route.

module.exports = router;

'use strict';

var express = require('express');
var Todo = require('../models/todos')
// var todos = require('../../mock/todos.json')

var router = express.Router();

router.get('/todos', function(req, res) {
  Todo.find({}, function(err, todos) {
    if (err) {
      return res.status(500).json({message: err.message});
    } else {
      res.json({todos: todos});
    }
  });
});

// TODO: Add PUT route.

// TODO: Add POST route.

// TODO: Add DELETE route.

module.exports = router;

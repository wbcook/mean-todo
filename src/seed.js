'use strict';

var Todo = require('./models/todos');

var todos = [
  'buy frozen pizza',
  'watch twitch stream',
  'play civilization 6 til 3 am',
  'water the dog',
  'sleep in'
];

todos.forEach(function (todo, index) {
  Todo.find({ 'name': todo }, function(err, todos) {
  	if (!err && !todos.length) {
      Todo.create({ completed: false, name: todo });
  	}
  });
});

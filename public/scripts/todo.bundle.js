webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp', []);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.controller('mainCtrl', function($scope, dataService){

	  dataService.getTodos(function(response){
	    var todos = response.data.todos;
	    $scope.todos =  todos;
	    });

	  $scope.addTodo = function() {
	    $scope.todos.unshift({name: "This is a new todo.",
	                      completed: false});
	  };

	})


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.controller('todoCtrl', function($scope, dataService) {
	  $scope.deleteTodo = function(todo, index) {
	    $scope.todos.splice(index, 1);
	    dataService.deleteTodo(todo);
	  };

	  $scope.saveTodos = function() {
	    var filteredTodos = $scope.todos.filter(function(todo){
	      if(todo.edited) {
	        return todo
	      };
	    })
	    dataService.saveTodos(filteredTodos);
	  };
	});


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.directive('todo', function(){
	  return {
	    templateUrl: 'templates/todo.html',
	    replace: true,
	    controller: 'todoCtrl'
	  }
	});


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('todoListApp')
	.service('dataService', function($http) {
	  this.getTodos = function(cb) {
	    $http.get('/api/todos').then(cb);
	  };

	  this.deleteTodo = function(todo) {
	    console.log("I deleted the " + todo.name + " todo!");
	  };

	  this.saveTodos = function(todos) {
	    console.log("I saved " + todos.length + " todos!");
	  };

	});


/***/ }
]);
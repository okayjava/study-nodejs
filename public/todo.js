angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false}];
    todoList.sample = [
        {text:'Sample learn AngularJS', done:true},
        {text:'Sample an AngularJS app', done:false}];

    //Ajax GET Method TEST
    $.ajax({
        url: 'http://localhost:3001',
        dataType: 'json',
        type: 'GET',
        success: function(result) {
            if (result) {
                console.log(result.result);
            }
        }
    });

    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.sample.push({text:todoList.todoText + "1111", done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });

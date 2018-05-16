var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

var newTodo = new Todo({
	text: 'cook dinner'
});

newTodo.save().then(function(doc){
	console.log('Saved Todo', doc);
}, function(error){
	console.log('Unable to save newTodo');
})

var newTask = new Todo({
	text: 'chicken dinner',
	completed: false
});

newTask.save().then(function(doc){
	console.log('Saved Task', doc);
}, function(error){
	console.log('Unable to save newTask');
});
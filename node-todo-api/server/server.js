var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
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
	text: '   chicken dinner   ', //trimmed automatically
	completed: false
});

newTask.save().then(function(doc){
	console.log('Saved Task', doc);
}, function(error){
	console.log('Unable to save newTask');
});


//User
//email, required, trim it, type = string, min length 1
var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

var errorUser = new User({
	email: '      '
});

errorUser.save().then(function(doc){
	console.log('Saved Task', doc);
}, function(error){
	console.log('Unable to save newUser');
});

var newUser = new User({
	email: 'yuyang@gmail.com'
});

newUser.save().then(function(doc){
	console.log('Saved Task', doc);
}, function(error){
	console.log('Unable to save newUser');
});
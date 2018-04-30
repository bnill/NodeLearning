const MongoClient = require('mongodb').MongoClient;
//const {MongoClient, ObjectID} = require('mongodb');
//var obj = new ObjectID();
//create a new objectID;

//url and a callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', function(err, client){
  if(err){
    return console.log('Unable to connect to mongodb');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  console.log('DB connected');

  //delete many
  /*
  db.collection('Todos').deleteMany({text: 'eat dinner'}).then(function(result){
  	console.log(result);
  }, function(err){
  	console.log(err);
  });*/

  //delete one
  /*
  db.collection('Todos').deleteOne({text: 'eat dinner'}).then(function(result){
  	console.log(result);
  }, function(err){
  	console.log(err);
  });*/

  //find one and delete
  db.collection('Todos').findOneAndDelete({text: 'eat dinner'}).then(function(result){
  	console.log(result);
  })

  db.collection('Users').findOneAndDelete({name: 'Sundae'}).then(function(result){
  	console.log(result);
  })

  client.close();
})
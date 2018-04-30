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
  
  db.collection('Todos').find({completed: true}).toArray().then(function(docs){
    console.log('Todos: ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, function(err){
    console.log('Unable to fetch from DB: ', err);
  });

  db.collection('Todos').find().count().then(function(count){
    console.log('Todos count: ');
    console.log(JSON.stringify(count, undefined, 2));
  }, function(err){
    console.log('Unable to fetch from DB: ', err);
  });

  db.collection('Users').find({age: '24'}).toArray().then(function(docs){
    console.log(JSON.stringify(docs, undefined, 2));
  }, function(err){
    console.log('Unable to fetch from DB: ', err);
  })

  client.close();
});

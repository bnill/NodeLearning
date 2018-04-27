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
  /*
  db.collection('Todos').insertOne({
    text: 'Something to do',
    completed: false
  }, function(err, result){
    if(err){
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });*/

  //insert new doc into users(name, age, location)

  db.collection('Users').insertOne({
    name: 'Sandy',
    age: '24',
    location: 'Lowell, MA'
  }, function(err, result){
    if(err){
      return console.log('Unable to insert User', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  })
  console.log('end of play')
  client.close();
});

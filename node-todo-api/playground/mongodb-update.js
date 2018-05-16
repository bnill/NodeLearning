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

  //find one and update
  db.collection('Todos').findOneAndUpdate({
    text: 'eat something'
  }, {
    $set: {
      completed: true,
      text: 'eat dinner'
    }
  }, {
    returnOriginal: false
  }).then(function(result){
    console.log(result);
  })

  db.collection('Users').findOneAndUpdate({
    _id: '5ae392e771ba915332326652'
  }, {
    $set: {
      name: 'fduflash',
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then(function(result){
    console.log(result);
  })

  client.close();
})
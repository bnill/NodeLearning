const express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('Hello from server');
});

app.get('/about', function(req, res){
  res.send({
    name: 'Sandy',
    age: 24
  })
});

app.get('/bad', function(req, res){
  res.send({
    name: 'Error',
    type: 'Connection error'
  })
});

app.listen('3000');

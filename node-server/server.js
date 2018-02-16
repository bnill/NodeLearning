const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

//middleware
app.use(function(req, res, next){
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', function(err){
    if(err){
      console.log('Unable to write the server log');
    }
  });
  //if no next, the other part won't be fired
  next();
});

/*
app.use(function(req, res, next){
  res.render('maintenance.hbs');
  //no next to block the following
})
*/

//locate the dir place, static middleware
app.use(express.static(__dirname + '/public'));

//hbs partial
hbs.registerHelper('getCurrentYear', function(){
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', function(text){
  return text.toUpperCase();
})

app.get('/', function(req, res){
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome',
  });
});

app.get('/about', function(req, res){
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', function(req, res){
  res.send({
    name: 'Error',
    type: 'Connection error'
  })
});

app.listen('3000', function(){
  console.log('server is up at 3000');
});

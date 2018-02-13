const request = require('request');

var somepromise = new Promise(function(resolve, reject){
  setTimeout(function(){
    //resolve('hey, it worked!');
    reject('unable to fulfill');
  }, 2500);
});

somepromise.then(function(message){
  console.log('Success: ' + message);
}, function(errorMessage){
  console.log('Error: ' + errorMessage);
});

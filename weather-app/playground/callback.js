//id for the user id
var getUser = function(id, callback){
  var user = {
    id: 23,
    name: 'sandy'
  }
  setTimeout(function(){
    callback(user);
  }, 3000);
};

getUser(23, function(user){
  console.log(user);
});

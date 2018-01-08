var getUser = function(id, callback){
  var user = {
    id: 23,
    name: 'sandy'
  }
  callback(user);
};

getUser(23, function(user){
  console.log(user);
});

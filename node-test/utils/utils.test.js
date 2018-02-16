const utils = require('./utils');

it('should add two numbers', function(){
  var res = utils.add(3, 5);
  if(res !== 8){
    throw new Error('Expected 8, but got' + res);
  }
});

it('should square the number', function(){
  var res = utils.square(3);
  if(res !== 9){
    throw new Error('Expected 9, but got ' + res);
  }
})

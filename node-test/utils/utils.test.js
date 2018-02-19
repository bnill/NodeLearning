const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', function(){
  var res = utils.add(3, 5);
  expect(res).toBe(8).toBeA('number');
});

it('should square the number', function(){
  var res = utils.square(3);
  expect(res).toBe(9).toBeA('number');
});

it('should expect some value', function(){
  //expect({name: 'bill'}).toEqual({name: 'bill'});
  //expect([2, 3, 4]).toInclude(2); //toExclude
  expect({
    name: 'bnill',
    age: 24
  }).toInclude({
    age: 24
  });
});

//verify first and last names are set
//assert it includes firstName and lastName with proper values
it('assert it includes firstName and lastName with proper values', function(){
  var user = {};
  var res = utils.setName(user, 'Yuyang Zhang');

  expect(res).toInclude({
    firstName: 'Yuyang',
    lastName: 'Zhang'
  })
});

it('should test async add', function(done){
  utils.asyncAdd(4, 3, function(sum){
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should test async square', function(done){
  utils.asyncSquare(4, function(square){
    expect(square).toBe(16).toBeA('number');
    done();
  });
});

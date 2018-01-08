var square = (x) => {
  var result = x * x;
  return result;
}

console.log(square(9));

var squareO = function(x){
  return x * x;
}
console.log(squareO(3));

var user = {
  name: 'James',
  sayHi: function(){
    console.log(`Hi, my name is ${this.name}`);
  }
}

user.sayHi();

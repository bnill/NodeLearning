console.log('Starting app');

setTimeout(function(){
  console.log('Inside of callBack');
}, 2000);

setTimeout(function(){
  console.log('Second callBack');
}, 0);
console.log('Finishing app');

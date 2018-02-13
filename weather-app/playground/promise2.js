var request = require('request');

var geocodeAddress = function(addrInput){
  return new Promise(function(resolve, reject){
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addrInput,
    json: true
  }, function(error, response, body){
    if(error){
      reject('Cannot fetch data from Google');
    }
    else if(body.status === 'ZERO_RESULTS'){
      reject('Geological data not found!');
      //console.log('Geological data not found!');
    }else if(body.status === 'OK'){
      resolve({
        address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude:  body.results[0].geometry.location.lng
      })
    }
  });
})};

geocodeAddress('01852').then(function(addr){
  console.log(JSON.stringify(addr, undefined, 2));
}, function(errorMessage){
  console.log(errorMessage);
})

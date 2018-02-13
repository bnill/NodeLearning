const request = require('request');

var geocodeAddress = function(address, callback){
  //encodeURIComponent
  //decodeURIComponent
  var addrInput = encodeURIComponent(address);

  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addrInput,
    json: true
  }, function(error, response, body){
    if(error){
      callback('Cannot fetch data from Google');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('Geological data not found!');
      //console.log('Geological data not found!');
    }else if(body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude:  body.results[0].geometry.location.lng
      })
    }
  });
};

module.exports.geocodeAddress = geocodeAddress;

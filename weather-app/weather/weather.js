const request = require('request');

var getWeather = function(Latitude, Longitude, callback){
  request({
    url: 'https://api.darksky.net/forecast/48d0fa78ed6d5f5df21e63e89d3ed3f1/' + Latitude + ',' + Longitude,
    json: true
  }, function(error, response, body){
    if(error){
      callback('unable to connect to the weather api');
      //console.log('unable to connect to the weather api');
    }
    else if(!error && response.statusCode === 200){
      callback(undefined, {
        currentTemperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
      //console.log(body.currently.temperature);
    }
    else{
      callback('unable to get the required data');
      //console.log('unable to get the required data');
    }
  });
}

module.exports.getWeather = getWeather;

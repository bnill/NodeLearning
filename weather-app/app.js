const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

// secret key weather.io: 48d0fa78ed6d5f5df21e63e89d3ed3f1
// sample request: https://api.darksky.net/forecast/48d0fa78ed6d5f5df21e63e89d3ed3f1/37.8267,-122.4233

// user of yargs
const argv = yargs
  .options({
    a: {
      demang: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

//console.log(argv.address);


geocode.geocodeAddress(argv.address, function(errorMessage, results){
  if(errorMessage){
    console.log(errorMessage);
  }
  else{
    console.log(JSON.stringify(results, undefined, 2));
    var Latitude = results.Latitude;
    var Longitude = results.Longitude;
    weather.getWeather(Latitude, Longitude, function(errorMessage, results){
      if(errorMessage){
        console.log(errorMessage);
      }
      else{
        console.log(JSON.stringify(results, undefined, 2));
      }
    });
  }
});

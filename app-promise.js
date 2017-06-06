const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
      .options({
        a:{
          demand:true,
          alias: 'address',
          descibe: 'address to fetch weather for',
          string: true
        }
      })
      .help()
      .alias('help', 'h')
      .argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;


axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS'){
    throw new Error('Unable to find the address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/4b0ec9dc5ea5c6293d21774aae04b59b/${lat}, ${lng}`;
  console.log(response.data.results[0].formatted_address);

  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var feelsLike = response.data.currently.apparentTemperature;

  console.log(`Currently its ${temperature} and it feels like ${feelsLike}`);
}).catch((e) => {
  if(e.code == 'ENOTFOUND'){
    console.log('Unable to connect to API');
  } else {
    console.log(e.message);
  }
});

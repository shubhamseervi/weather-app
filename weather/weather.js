const request = require('request');

var getWeather = (lat , lng, callback) => {
  request({
  url: `https://api.darksky.net/forecast/4b0ec9dc5ea5c6293d21774aae04b59b/${lat}, ${lng}`,
  json: true
}, (error, response, body) => {

  //console.log(JSON.stringify(response));
  //console.log(error);

  if (!error && response.statusCode === 200){
    callback(undefined,  {
      temperature: body.currently.temperature,
      apparentTemperature: body.currently.apparentTemperature
    });
  }else{
    callback('Unable to fetch weather.');
  }  
});
};

module.exports.getWeather = getWeather;

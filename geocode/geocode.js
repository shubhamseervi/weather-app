const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodeAddress = encodeURIComponent(address);

  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true
    // node use this and send to google in its header
  }, (error, response, body) => {

    if(error){
      callback('Unable to connect to google server.')
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Unable to find the address.');
    }else if(body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  });
};


module.exports.geocodeAddress = geocodeAddress;

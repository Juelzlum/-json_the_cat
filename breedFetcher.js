const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search/?q=' + breedName, function(error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if (error === null) {
      const data = JSON.parse(body);
      // console.log(data.length)
      if (data.length === 0) {
        console.log('Please input a proper breed of cat!');
      }
      if (data.length >= 1) {
        console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
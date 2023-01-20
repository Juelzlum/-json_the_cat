const request = require('request');
const args = process.argv.slice(2);
console.log(args) 
const breed = args[0]

request('https://api.thecatapi.com/v1/breeds/search/?q='+ breed, function (error, response, body) {
  //console.error('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  //Allow the user to specify the breed name using command-line arguments.
  if(error === null) {
    const data = JSON.parse(body)
    // console.log(data.length)
    if(data.length === 0) { 
       console.log('Please input a proper breed of cat!')
      }
    if(data.length >= 1) {
      console.log(data[0].description)
    }
  
  }

});
